import React, { useEffect, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AUTHENTICATED, UNAUTHENTICATED } from '../../navigator/routes';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actionsCreator/profileActionsCreator';
import { AppState } from '../../reducers/rootReducer';
import { AlertsContext } from '../../contexts/AlertsContext';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { ILoadingProps } from './interface';

export const Loading = ({ navigation }: ILoadingProps) => {
	const { profile, error } = useSelector((state: AppState) => state.profile);
	const dispatch = useDispatch();
	const { showAlert } = useContext(AlertsContext);
	const { t } = useTranslation();

	useEffect(() => {
		if (!profile) {
			dispatch(actions.getProfile());
			return;
		}

		navigation.navigate(
			profile.isFirstAccess ? UNAUTHENTICATED : AUTHENTICATED,
		);
	}, [navigation, profile, dispatch]);

	if (error) {
		showAlert({ type: 'error', message: t('errorLoading') });
	}

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" />
		</View>
	);
};
