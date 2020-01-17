import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Register } from './';
import { findByDataTest } from '../../utils/testUtil';
import rendered from 'react-test-renderer';

jest.mock('firebase', () => ({
	auth: jest.fn(),
}));

import { auth } from 'firebase';

const setup = (): ShallowWrapper => {
	return shallow(<Register />);
};

const instanceOf = (): any => {
	return rendered.create(<Register />).root.instance;
};

describe('Register basic tests', () => {
	it('should rendere the Register Component Properly', () => {
		const wrapper = setup();
		const register = findByDataTest(wrapper, 'register');
		expect(register).toHaveLength(1);
		expect(register).toMatchSnapshot();
	});

	it('should change name state when a new name is inserted', () => {
		const instance = instanceOf();
		const newName = 'Repeat Please';
		instance.onNameChange(newName);
		expect(instance.state.name).toBe(newName);
	});

	it('should change email state when a new email is inserted', () => {
		const instance = instanceOf();
		const newEmail = 'repeat.please@gamellama.com';
		instance.onEmailChange(newEmail);
		expect(instance.state.email).toBe(newEmail);
	});

	it('should change password state when a new password is inserted', () => {
		const instance = instanceOf();
		const newPassword = 'secret';
		instance.onPasswordChange(newPassword);
		expect(instance.state.password).toBe(newPassword);
	});
});

describe('Firebase tests', () => {
	describe('Handle Register Tests with Errors', () => {
		it('should return an error from HandleRegister', async () => {
			// @ts-ignore
			auth.mockImplementation(() => ({
				createUserWithEmailAndPassword: jest
					.fn()
					.mockRejectedValueOnce(new Error('Register Error')),
			}));
			const instance = instanceOf();
			await instance.handleRegister();
			expect(instance.state.hasError).toBe(true);
			expect(instance.state.errorMessage).toBe('Register Error');
		});
	});

	describe('Handle Register Tests with Success', () => {
		it('should return an error when the user is unknow', async () => {
			// @ts-ignore
			auth.mockImplementation(() => ({
				createUserWithEmailAndPassword: jest.fn().mockResolvedValue({}),
			}));
			const instance = instanceOf();
			await instance.handleRegister();
			expect(instance.state.hasError).toBe(true);
			expect(instance.state.errorMessage).toBe('User unknown');
		});

		it('should update the display user', async () => {
			// @ts-ignore
			const authMock = auth.mockImplementation(() => ({
				createUserWithEmailAndPassword: jest.fn().mockResolvedValue({
					user: {
						updateProfile: (profile: { displayName: string }): void => {
							profile;
						},
					},
				}),
			}));

			const instance = instanceOf();
			await instance.handleRegister();
			expect(authMock).toBeCalled();
			expect(instance.state.hasError).toBe(false);
		});
	});
});
