import {render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './button';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup()
});

it('matches the snapshot with actual DOM tree', () => {
    const component = renderer.create(<Button/>);
    const DOMTree = component.toJSON();
    expect(DOMTree).toMatchSnapshot();
});

it('renders Button component', () => {
    render(<Button/>);
    const ButtonElement = screen.getAllByTestId('button');
    expect(ButtonElement[0]).toBeInTheDocument();
})