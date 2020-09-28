import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

// jest.useFakeTimers();

jest.mock('react-i18next', () => ({
	useTranslation: () => ({ t: key => key }),
}));
