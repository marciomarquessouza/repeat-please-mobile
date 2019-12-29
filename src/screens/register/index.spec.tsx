import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Register } from './';
import { findByDataTest } from '../../utils/testUtil';

const setup = (): ShallowWrapper => {
	return shallow(<Register />);
};

describe('Register basic tests', () => {
	it('should rendere the Register Component Properly', () => {
		const wrapper = setup();
		const register = findByDataTest(wrapper, 'register');
		expect(register).toHaveLength(1);
		expect(register).toMatchSnapshot();
	});
});
