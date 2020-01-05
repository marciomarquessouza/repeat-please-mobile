import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Password, IPasswordProps } from '.';
import { findByDataTest } from '../../utils/testUtil';

const defaultProps: IPasswordProps = {
	password: 'Secret',
	onPasswordChange: (password: string) => password,
};

const setup = (props: IPasswordProps): ShallowWrapper => {
	return shallow(<Password {...props} />);
};

describe('Password basic tests', () => {
	it('should render the Password Component Properly', () => {
		const wrapper = setup({ ...defaultProps });
		const password = findByDataTest(wrapper, 'password');
		expect(password).toHaveLength(1);
		expect(password).toMatchSnapshot();
	});

	it('should change the password value when a new text is inputed', () => {
		let password = '';
		const newPassword = 'secret';
		const onPasswordChange = (text: string): void => {
			password = text;
		};
		const wrapper = setup({ password, onPasswordChange });
		const passwordComponent = findByDataTest(wrapper, 'password');
		passwordComponent.simulate('ChangeText', newPassword);
		expect(password).toBe(newPassword);
	});
});
