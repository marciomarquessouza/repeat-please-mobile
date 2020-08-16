import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { AUTHENTICATED, UNAUTHENTICATED } from '../../navigator/routes';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actionsCreator/profileActionsCreator';
import { AppState } from '../../reducers/rootReducer';

interface ILoadingProps {
	navigation: NavigationStackProp;
}

export const Loading = ({ navigation }: ILoadingProps) => {
	const { profile } = useSelector((state: AppState) => state.profile);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!profile) {
			dispatch(actions.getProfile());
			return;
		}

		navigation.navigate(
			profile.isFirstAccess ? UNAUTHENTICATED : AUTHENTICATED,
		);
	}, [navigation, profile, dispatch]);

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
	},
});
