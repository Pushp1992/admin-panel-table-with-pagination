import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Table from './table';
import '@testing-library/jest-dom';
import { data } from './mock-data';

afterEach(() => {
    cleanup()
});

it('match snapshot with DOM tree', () => {
    const component = renderer.create(<Table/>);
    const DOMTree = component.toJSON();
    expect(DOMTree).toMatchSnapshot();
});

it('renders Table Component', () => {
    render(<Table items={data} />);
    const tableElement = screen.getAllByTestId('table');
    expect(tableElement[0]).toBeInTheDocument();
});

it('renders single table', () => {
    render(<Table items={data} />);
    const tableElement = screen.getAllByTestId('table');
    expect(tableElement).toHaveLength(1);
});