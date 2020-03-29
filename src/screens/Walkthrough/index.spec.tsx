import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Walkthrough, IWalkthroughProps } from './';
import { findByDataTest } from '../../utils/testUtil';

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn(),
	},
});

jest.mock('firebase', () => ({
	auth: jest.fn(() => ({
		signInWithEmailAndPassword: jest
			.fn()
			.mockRejectedValue(new Error('This is a Error')),
	})),
}));

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
});
