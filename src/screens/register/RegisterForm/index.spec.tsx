import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { RegisterForm, IRegisterFormProps } from './';
import { findByDataTest } from '../../../utils/testUtil';

const defaultProps: IRegisterFormProps = {
	hasError: false,
	errorMessage: 'I am an error message',
	email: 'repeat@email.com',
	onEmailChange: (email: string) => email,
	name: 'Repeat Please',
	onNameChange: (name: string) => name,
	password: 'Secret',
	onPasswordChange: (password: string) => password,
	handleRegister: () => {},
};

const setup = (props: IRegisterFormProps): ShallowWrapper => {
	return shallow(<RegisterForm {...props} />);
};

describe('Register basic tests', () => {
	it('should render the Register Component Properly', () => {
		const wrapper = setup({ ...defaultProps });
		const register = findByDataTest(wrapper, 'register');
		expect(register).toHaveLength(1);
		expect(register).toMatchSnapshot();
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
