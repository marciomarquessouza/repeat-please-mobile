import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Login } from './';
import { findByDataTest } from '../../utils/testUtil';
import renderer from 'react-test-renderer';

jest.mock('firebase', () => ({
	auth: jest.fn(() => ({
		signInWithEmailAndPassword: jest
			.fn()
			.mockRejectedValue(new Error('This is a Error')),
	})),
}));

const setup = (): ShallowWrapper => {
	return shallow(<Login />);
};

const instanceOf = (): any => {
	return renderer.create(<Login />).root.instance;
};

describe('Login Basic Test', () => {
	it('should render the Login component properly', () => {
		const wrapper = setup();
		const login = findByDataTest(wrapper, 'login');
		expect(login).toHaveLength(1);
		expect(login).toMatchSnapshot();
	});

	it('should change email state if a new email is entered', () => {
		const instance = instanceOf();
		const newEmail = 'repeat.please@gamellama.com';
		instance.onEmailChange(newEmail);
		expect(instance.state.email).toBe(newEmail);
	});

	it('should change password state if a new password is entered', () => {
		const instance = instanceOf();
		const newPassword = 'secret';
		instance.onPasswordChange(newPassword);
		expect(instance.state.password).toBe(newPassword);
	});
});

describe('Login - Firebase Tests', () => {
	it('should call handleLogin with an error', async () => {
		const instance = instanceOf();
		await instance.handleLogin();
		expect(instance.state.hasError).toBe(true);
		expect(instance.state.errorMessage).toBe('This is a Error');
	});
});
