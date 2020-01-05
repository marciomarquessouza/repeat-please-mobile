import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Name, INameProps } from '.';
import { findByDataTest } from '../../utils/testUtil';

const defaultProps: INameProps = {
	name: '',
	onNameChange: (name: string) => name,
};

const setup = (props: INameProps): ShallowWrapper => {
	return shallow(<Name {...props} />);
};

describe('Name basic tests', () => {
	it('should render the Name Component Properly', () => {
		const wrapper = setup({ ...defaultProps });
		const name = findByDataTest(wrapper, 'name');
		expect(name).toHaveLength(1);
		expect(name).toMatchSnapshot();
	});

	it('should change the name when a new value is inputed', () => {
		let name = '';
		const newName = 'Repeat Please';
		const onNameChange = (text: string): void => {
			name = text;
		};
		const wrapper = setup({ name, onNameChange });
		const nameComponent = findByDataTest(wrapper, 'name');
		nameComponent.simulate('ChangeText', newName);
		expect(name).toBe(newName);
	});
});
