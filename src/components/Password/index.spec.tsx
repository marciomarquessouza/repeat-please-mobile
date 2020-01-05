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
	it('should rendere the Password Component Properly', () => {
		const wrapper = setup({ ...defaultProps });
		const password = findByDataTest(wrapper, 'password');
		expect(password).toHaveLength(1);
		expect(password).toMatchSnapshot();
	});
});
