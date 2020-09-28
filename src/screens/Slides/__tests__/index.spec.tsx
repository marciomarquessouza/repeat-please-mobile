import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import * as redux from 'react-redux';
import { Slides } from '../';
import { ISlidesProps } from '../interface';

const defaultProps: any = {
	navigation: {
		navigate: jest.fn(),
	},
};

const setup = (props: ISlidesProps) => render(<Slides {...props} />);

describe('#Slides', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	describe('#Unit Tests', () => {
		it('renders properly', () => {
			jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
			const wrapper = setup(defaultProps);
			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe.skip('#Integration Tests', () => {
		describe('when press the next slide button', () => {
			it('enables the previous button ', async () => {
				jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
				const wrapper = setup(defaultProps);
				const nextButton = wrapper.getByTestId('nextButton');
				fireEvent.press(nextButton);
				await waitFor(() => wrapper.getByTestId('slide02'), {
					interval: 2000,
				});
				expect(wrapper.toJSON()).toMatchSnapshot();
			});
		});
	});
});
