import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import TextField from './text-field';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup()
});

it('match snapshot with DOM tree', () => {
    const component = renderer.create(<TextField/>);
    const DOMTree = component.toJSON();
    expect(DOMTree).toMatchSnapshot();
});

it('render TextField component', () => {
    render(<TextField/>);

    const textElement = screen.getAllByTestId('text-field');
    expect(textElement[0]).toBeInTheDocument();
});