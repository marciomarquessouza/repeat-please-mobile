import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByDataTest } from '../../utils/testUtil';
import { Slides } from './';
import rendered from 'react-test-renderer';
import { NavigationInjectedProps } from 'react-navigation';

jest.mock('react-navigation', () => ({
	withNavigation: (component: JSX.Element): JSX.Element => component,
}));

const createTestProps = (props: Object) => ({
	navigation: {
		navigate: jest.fn(),
	},
	...props,
});

const setup = (props: NavigationInjectedProps): ShallowWrapper => {
	return shallow(<Slides {...props} />);
};

const instanceOf = (props: NavigationInjectedProps): any => {
	return rendered.create(<Slides {...props} />).root.instance;
};

describe('Slides basic tests', () => {
	let props: any;
	beforeEach(() => {
		props = createTestProps({});
	});
	it('should render the inital slides properly', () => {
		const wrapper = setup(props);
		const slidesComnponent = findByDataTest(wrapper, 'slidesComponent');
		expect(slidesComnponent).toHaveLength(1);
		expect(slidesComnponent).toMatchSnapshot();
	});

	it('should change showRealApp to true when slides are done', () => {
		const instance = instanceOf(props);
		instance.onDone();
		expect(instance.state.showRealApp).toBe(true);
	});
});
