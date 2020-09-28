import React from 'react';
import {
	fireEvent,
	render,
	RenderAPI,
	waitFor,
} from '@testing-library/react-native';
import * as redux from 'react-redux';
import { Slides } from '../';
import { ISlidesProps } from '../interface';
import { HOME } from '../../../navigator/routes';
import { SLIDES_TRANSITION_DURATION } from '../../../constants/slides';

const defaultProps: any = {
	navigation: {
		navigate: jest.fn(),
	},
};

const setup = (props: ISlidesProps) => render(<Slides {...props} />);

const moveToLastSlide = async (wrapper: RenderAPI, action: () => void) => {
	const interval = SLIDES_TRANSITION_DURATION;
	const nextButton = wrapper.getByTestId('nextButton');
	fireEvent.press(nextButton);

	await waitFor(
		async () => {
			fireEvent.press(nextButton);
			await waitFor(
				async () => {
					fireEvent.press(nextButton);
					await waitFor(() => action(), { interval });
				},
				{ interval },
			);
		},
		{ interval },
	);
};

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

	describe('#Integration Tests', () => {
		describe('when goes to the last slide', () => {
			describe('when press the start button', () => {
				it('dispatchs a actions to set the first access', async () => {
					const spy = jest
						.spyOn(redux, 'useDispatch')
						.mockReturnValue(jest.fn());
					const wrapper = setup(defaultProps);
					await moveToLastSlide(wrapper, () =>
						fireEvent.press(wrapper.getByTestId('startButton')),
					);
					expect(spy).toHaveBeenCalled();
				});

				it('navigate to HOME', async () => {
					jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
					const wrapper = setup(defaultProps);
					await moveToLastSlide(wrapper, () =>
						fireEvent.press(wrapper.getByTestId('startButton')),
					);
					expect(defaultProps.navigation.navigate).toHaveBeenCalledWith(HOME);
				});
			});
		});
	});
});
