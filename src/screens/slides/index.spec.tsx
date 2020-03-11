import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../utils/testUtil';
import { Slides, ISlidesProps } from './';
import rendered from 'react-test-renderer';

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn(),
	},
});

const setup = (props: ISlidesProps): ShallowWrapper => {
	return shallow(<Slides {...props} />);
};

const instanceOf = (props: ISlidesProps): any => {
	return rendered.create(<Slides {...props} />).root.instance;
};

describe('Slides basic tests', () => {
	let props: any;
	beforeEach(() => {
		props = createTestProps();
	});
	it('should render the inital slides properly', () => {
		const wrapper = setup(props);
		const slidesComnponent = findByDataTest(wrapper, 'slidesComponent');
		expect(slidesComnponent).toHaveLength(1);
		expect(slidesComnponent).toMatchSnapshot();
	});
});
