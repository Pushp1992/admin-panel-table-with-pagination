import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {mockdata} from './mock-data';
import DropDownField from './drop-down-field';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

it('matches snapshot with actual DOM tree', () => {
    const component = renderer.create(<DropDownField items={mockdata} />);
    const DOMTree = component.toJSON();
    expect(DOMTree).toMatchSnapshot();
});

it('renders dropdown component', () => {
    render(<DropDownField items={mockdata} />);
    const element = screen.getAllByTestId('dropdown');
    expect(element[0]).toBeInTheDocument();
});
