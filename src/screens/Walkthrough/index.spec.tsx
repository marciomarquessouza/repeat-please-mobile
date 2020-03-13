import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Walkthrough, IWalkthroughProps } from './';
import { findByDataTest } from '../../utils/testUtil';

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn(),
	},
});

const setup = (props: IWalkthroughProps): ShallowWrapper => {
	return shallow(<Walkthrough {...props} />);
};

describe('Walkthrough basic test', () => {
	let props: any;
	beforeEach(() => {
		props = createTestProps();
	});

	it('should render Walkthrough component properly', () => {
		const wrapper = setup(props);
		const walkthrough = findByDataTest(wrapper, 'walkthrough');
		expect(walkthrough).toHaveLength(1);
		expect(walkthrough).toMatchSnapshot();
	});

	it('should press the register button', () => {
		const wrapper = setup(props);
		const buttonRegister = findByDataTest(wrapper, 'register');
		buttonRegister.simulate('press');
		expect(props.navigation.navigate).toBeCalled();
	});

	it('should press the login button', () => {
		const wrapper = setup(props);
		const buttonLogin = findByDataTest(wrapper, 'login');
		buttonLogin.simulate('press');
		expect(props.navigation.navigate).toBeCalled();
	});
});
