import React, { useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	ActivityIndicator,
	SafeAreaView,
} from 'react-native';
import { ButtonPrimary } from 'repeat-please-styles';
import * as firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { getUserRequest } from '../../actions/actionsCreator/userActionsCreator';

export const Options = () => {
	const { users, loading } = useSelector((state: AppState) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserRequest());
	}, [dispatch]);

	return (
		<SafeAreaView style={styles.container}>
			<Text>Options Screen</Text>
			<View>
				<ButtonPrimary onPress={() => firebase.auth().signOut()}>
					Log Out
				</ButtonPrimary>
			</View>

			{loading ? (
				<ActivityIndicator size="small" />
			) : (
				<FlatList
					data={users}
					keyExtractor={({ id }) => `${id}`}
					renderItem={({ item, index }) => (
						<Text key={index}>{`${item.name} - ${item.email}`}</Text>
					)}
				/>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});
