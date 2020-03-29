import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { LoginForm, ILoginFormProps } from './';
import { findByDataTest } from '../../../utils/testUtil';

const defaultProps: ILoginFormProps = {
	hasError: false,
	errorMessage: 'I am an error message',
	email: 'repeat@email.com',
	onEmailChange: (email: string) => email,
	password: 'Secret',
	onPasswordChange: (password: string) => password,
	handleLogin: () => {},
	forgotPassword: () => {},
	isLoading: false,
};

const setup = (props: ILoginFormProps): ShallowWrapper => {
	return shallow(<LoginForm {...props} />);
};

describe('Login basic tests', () => {
	it('should render the Login Component Properly', () => {
		const wrapper = setup({ ...defaultProps });
		const login = findByDataTest(wrapper, 'login');
		expect(login).toHaveLength(1);
		expect(login).toMatchSnapshot();
	});

	it('should not render the Error Message', () => {
		const wrapper = setup({ ...defaultProps });
		const errorMessage = findByDataTest(wrapper, 'errorMessage');
		expect(errorMessage).toHaveLength(0);
	});

	it('should render the Error Message Properly', () => {
		const wrapper = setup({ ...defaultProps, hasError: true });
		const errorMessage = findByDataTest(wrapper, 'errorMessage');
		expect(errorMessage).toHaveLength(1);
	});
});
