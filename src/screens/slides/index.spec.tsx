import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../utils/testUtil';
import { Slides } from './';

const setup = (): ShallowWrapper => {
	return shallow(<Slides />);
};

describe('Slides basic tests', () => {
	it('should render the inital slides properly', () => {
		const wrapper = setup();
		const slidesComnponent = findByDataTest(wrapper, 'slidesComponent');
		expect(slidesComnponent).toHaveLength(1);
		expect(slidesComnponent).toMatchSnapshot();
	});
});
