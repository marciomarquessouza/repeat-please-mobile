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

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn(),
	},
});

const setup = (props: any): ShallowWrapper => {
	return shallow(<Login {...props} />);
};

const instanceOf = (props: any): any => {
	return renderer.create(<Login {...props} />).root.instance;
};

describe('Login Basic Test', () => {
	let props: any;
	beforeEach(() => {
		props = createTestProps();
	});
	it('should render the Login component properly', () => {
		const wrapper = setup(props);
		const login = findByDataTest(wrapper, 'login');
		expect(login).toHaveLength(1);
		expect(login).toMatchSnapshot();
	});

	it('should change email state if a new email is entered', () => {
		const instance = instanceOf(props);
		const newEmail = 'repeat.please@gamellama.com';
		instance.onEmailChange(newEmail);
		expect(instance.state.email).toBe(newEmail);
	});

	it('should change password state if a new password is entered', () => {
		const instance = instanceOf(props);
		const newPassword = 'secret';
		instance.onPasswordChange(newPassword);
		expect(instance.state.password).toBe(newPassword);
	});
});
