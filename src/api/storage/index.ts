import realm from './realm';
import { IStorage } from '../../../types/storage';

export function get<T>(schemaName: string) {
	return {
		all: () => realm.objects<T>(schemaName),
		getFiltered: (filter: string) =>
			realm.objects<T>(schemaName).filtered(filter),
		byId: function(id: number) {
			return this.getFiltered(`id=${id}`);
		},
		searchBy: function(fieldName: string, searchdata: string) {
			return this.getFiltered(`${fieldName}=${searchdata}`);
		},
		byQuery: function(query: string) {
			return this.getFiltered(`${query}`);
		},
	};
}

export function set<T extends IStorage>(schemaName: string, data: T) {
	const isUpdate = !!get(schemaName).byId(data.id).length;
	try {
		realm.write(() => {
			realm.create<T>(schemaName, data, isUpdate);
		});
	} catch (error) {
		throw new Error(`Database - error to update data: ${error.message}`);
	}
}

export function create<T>(schemaName: string, data: Array<T>) {
	try {
		realm.write(() => {
			data.forEach(record => {
				realm.create(schemaName, record);
			});
		});
	} catch (error) {
		throw new Error(`Database - error to create data: ${error.message}`);
	}
}

export function clear<T>(schemaName: string) {
	const remove = (data: Realm.Results<T & Realm.Object>) => {
		try {
			realm.write(() => {
				realm.delete(data);
			});
		} catch (error) {
			throw new Error(`Database - error to update data: ${error.message}`);
		}
	};

	return {
		all: () => {
			const data = get<T>(schemaName).all();
			remove(data);
		},
		byData: (data: Realm.Results<T & Realm.Object>) => remove(data),
	};
}
