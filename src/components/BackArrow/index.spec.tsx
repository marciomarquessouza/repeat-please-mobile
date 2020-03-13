import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BackArrow, IBackArrowProps } from './';
import { findByDataTest } from '../../utils/testUtil';

const setup = (props: IBackArrowProps): ShallowWrapper => {
	return shallow(<BackArrow {...props} />);
};

describe('Back Arrow basic tests', () => {
	it('should render the Back Arrow properly', () => {
		const wrapper = setup({});
		const backArrowComponent = findByDataTest(wrapper, 'BackArrow');
		expect(backArrowComponent).toHaveLength(1);
		expect(backArrowComponent).toMatchSnapshot();
	});

	it('should render the Back Arrow with a different color', () => {
		const wrapper = setup({ color: 'red' });
		const backArrowComponent = findByDataTest(wrapper, 'BackArrow');
		expect(backArrowComponent).toHaveLength(1);
		expect(backArrowComponent).toMatchSnapshot();
	});
});
