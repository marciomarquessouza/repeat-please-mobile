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
});
