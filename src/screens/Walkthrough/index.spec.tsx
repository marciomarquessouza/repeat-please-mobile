import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Walkthrough, IWalkthroughProps } from './';
import { findByDataTest } from '../../utils/testUtil';

const setup = (props: IWalkthroughProps): ShallowWrapper => {
	return shallow(<Walkthrough {...props} />);
};

describe('Walkthrough basic test', () => {
	it('should render Walkthrough component properly', () => {
		const navigation = { navigate: () => jest.fn() };
		const wrapper = setup({ navigation });
		const walkthrough = findByDataTest(wrapper, 'walkthrough');
		expect(walkthrough).toHaveLength(1);
		expect(walkthrough).toMatchSnapshot();
	});

	it('should press the register button', () => {
		const navigation = { navigate: jest.fn() };
		const wrapper = setup({ navigation });
		const buttonRegister = findByDataTest(wrapper, 'register');
		buttonRegister.simulate('press');
		expect(navigation.navigate).toBeCalled();
	});

	it('should press the login button', () => {
		const navigation = { navigate: jest.fn() };
		const wrapper = setup({ navigation });
		const buttonLogin = findByDataTest(wrapper, 'login');
		buttonLogin.simulate('press');
		expect(navigation.navigate).toBeCalled();
	});
});
