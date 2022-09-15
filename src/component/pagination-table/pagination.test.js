import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import TableComponent from './pagination';
import {data} from '../table/mock-data';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

it('matches snapshot with actual DOM tree', () => {
    const component = renderer.create(<TableComponent/>);
    const DOMTree = component.toJSON();
    expect(DOMTree).toMatchSnapshot();
});

it('renders TableComponent', () => {
    render(<TableComponent items={data} />);
    const element = screen.getAllByTestId('table-component');
    expect(element[0]).toBeInTheDocument();
});
