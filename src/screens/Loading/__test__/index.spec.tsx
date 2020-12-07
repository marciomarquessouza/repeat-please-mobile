import React from 'react';
import { render } from '@testing-library/react-native';
import { Loading } from '../';
import * as redux from 'react-redux';
import { ILoadingProps } from '../interface';
import { TAB_NAVIGATOR, UNAUTHENTICATED } from '../../../navigator/routes';
import * as AlertsContext from '../../../contexts/AlertsContext';

const defaultProps: any = {
	navigation: {
		navigate: jest.fn(),
	},
};

const setup = (props: ILoadingProps) => render(<Loading {...props} />);

describe('#Loading', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	describe('#Unit Test', () => {
		it('renders the component properly', () => {
			jest.spyOn(redux, 'useSelector').mockReturnValue({
				profile: null,
			});
			jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
			const wrapper = setup(defaultProps);
			expect(wrapper.toJSON()).toMatchSnapshot();
		});

		describe('when the profile is null', () => {
			it('dispatchs a function to get the profile', () => {
				jest.spyOn(redux, 'useSelector').mockReturnValue({
					profile: null,
				});
				const spy = jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
				setup(defaultProps);
				expect(spy).toHaveBeenCalled();
			});
		});

		describe('when exists a profile', () => {
			[
				{ isFirstAccess: true, route: UNAUTHENTICATED },
				{ isFirstAccess: false, route: TAB_NAVIGATOR },
			].forEach(({ isFirstAccess, route }) => {
				describe(`when ${isFirstAccess ? 'is' : 'is not'} first access`, () => {
					it(`navigate to the ${route} route `, () => {
						jest.spyOn(redux, 'useSelector').mockReturnValue({
							profile: { isFirstAccess },
						});
						jest.spyOn(redux, 'useDispatch');

						setup(defaultProps);

						expect(defaultProps.navigation.navigate).toHaveBeenCalledWith(
							route,
						);
					});
				});
			});
		});

		describe('when occours an error to load the profile', () => {
			it('shows an error alert', () => {
				const showAlertMock = jest.fn();
				jest.spyOn(AlertsContext, 'useAlertContext').mockImplementation(() => ({
					showAlert: showAlertMock,
				}));
				jest.spyOn(redux, 'useSelector').mockReturnValue({
					profile: null,
					error: 'Error to Load the user profile',
				});
				jest.spyOn(redux, 'useDispatch');

				setup(defaultProps);

				expect(showAlertMock).toHaveBeenCalledWith({
					type: 'error',
					message: 'errorLoading',
				});
			});
		});
	});
});
