import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import CheckBox from './checkbox';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

it('matches snapshot with actual DOM tree', () => {
    const component = renderer.create(<CheckBox/>);
    const DOMTree = component.toJSON();
    expect(DOMTree).toMatchSnapshot();
});

it('renders Checkbox component', () => {
    render(<CheckBox/>);
    const element = screen.getAllByTestId('checkbox');
    expect(element[0]).toBeInTheDocument();
});
