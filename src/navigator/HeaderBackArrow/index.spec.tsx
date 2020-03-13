import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeaderBackArrow, IHeaderBackArrow } from './';
import { findByDataTest } from '../../utils/testUtil';

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn(),
	},
});

const setup = (props: IHeaderBackArrow): ShallowWrapper => {
	return shallow(<HeaderBackArrow {...props} />);
};

describe('Header Back Arrow basic tests', () => {
	let props: any;
	beforeEach(() => {
		props = createTestProps();
	});

	it('should render Header Back Arrow component properly', () => {
		const wrapper = setup(props);
		const backArrowComponent = findByDataTest(wrapper, 'backArrow');
		expect(backArrowComponent).toHaveLength(1);
		expect(backArrowComponent).toMatchSnapshot();
	});
});
