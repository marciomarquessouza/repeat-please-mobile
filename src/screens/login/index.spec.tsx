import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Login } from './';
import { findByDataTest } from '../../utils/testUtil';

const setup = (): ShallowWrapper => {
	return shallow(<Login />);
};

describe('Login Basic Test', () => {
	it('should render the Login component properly', () => {
		const wrapper = setup();
		const login = findByDataTest(wrapper, 'login');
		expect(login).toHaveLength(1);
		expect(login).toMatchSnapshot();
	});
});
