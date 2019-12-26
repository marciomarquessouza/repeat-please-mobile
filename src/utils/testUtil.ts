import { ShallowWrapper } from 'enzyme';

export const findByDataTest = (
	wrapper: ShallowWrapper,
	dataTest: string,
): ShallowWrapper => {
	return wrapper.find(`[data-test="${dataTest}"]`);
};
