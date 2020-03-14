import NetInfo, { NetInfoStateType } from '@react-native-community/netinfo';

export interface ICheckConnection {
	isConnected: boolean;
	type: NetInfoStateType;
}

export const checkConnection = async (): Promise<ICheckConnection> => {
	try {
		return await NetInfo.fetch();
	} catch (error) {
		throw new Error(error.message);
	}
};
