import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Email, IEmailProps } from '.';
import { findByDataTest } from '../../utils/testUtil';

const defaultProps: IEmailProps = {
	email: 'repeat@email.com',
	onEmailChange: (email: string) => email,
};

const setup = (props: IEmailProps): ShallowWrapper => {
	return shallow(<Email {...props} />);
};

describe('Email basic tests', () => {
	it('should rendere the Email Component Properly', () => {
		const wrapper = setup({ ...defaultProps });
		const email = findByDataTest(wrapper, 'email');
		expect(email).toHaveLength(1);
		expect(email).toMatchSnapshot();
	});

	it('should change the email value when a new value is inputed', () => {
		let email = '';
		const newEmail = 'repeat.please@gamellama.com';
		const onEmailChange = (text: string): void => {
			email = text;
		};
		const wrapper = setup({ email, onEmailChange });
		const emailComponent = findByDataTest(wrapper, 'email');
		emailComponent.simulate('ChangeText', newEmail);
		expect(email).toBe(newEmail);
	});
});
