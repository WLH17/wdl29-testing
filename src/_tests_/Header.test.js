import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Header from '../Components/Header';

it('dropdown does not show when component mounts', () => {
    const {queryByTestId} = render(<Header />);
    const dropdown = queryByTestId('dropdown');
    expect(dropdown).not.toBeTruthy();
})

it('Dropdown shows when hamburger is clicked', () => {
    const {container, getByTestId} = render(<Header />);
    const hamburger = getByTestId('hamburger-button');
    fireEvent.click(hamburger);
    //expect(dropdown).toBeTruthy();
    expect(container.textContent).toContain('Dropdown menu');
})