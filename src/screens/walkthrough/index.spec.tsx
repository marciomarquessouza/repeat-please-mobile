import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Walkthrough } from './';
import { findByDataTest } from '../../utils/testUtil';

const setup = (): ShallowWrapper => {
	return shallow(<Walkthrough />);
};

describe('Walkthrough basic test', () => {
	it('should render Walkthrough component properly', () => {
		const wrapper = setup();
		const walkthrough = findByDataTest(wrapper, 'walkthrough');
		expect(walkthrough).toHaveLength(1);
		expect(walkthrough).toMatchSnapshot();
	});
});
