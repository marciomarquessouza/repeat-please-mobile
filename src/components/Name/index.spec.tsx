import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Name, INameProps } from '.';
import { findByDataTest } from '../../utils/testUtil';

const defaultProps: INameProps = {
	name: 'Repeat Please',
	onNameChange: (name: string) => name,
};

const setup = (props: INameProps): ShallowWrapper => {
	return shallow(<Name {...props} />);
};

describe('Name basic tests', () => {
	it('should rendere the Name Component Properly', () => {
		const wrapper = setup({ ...defaultProps });
		const name = findByDataTest(wrapper, 'name');
		expect(name).toHaveLength(1);
		expect(name).toMatchSnapshot();
	});
});
