// src/test/Item.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Item from '../Components/Item';
import { TestLayout } from './utils/TestLayout';
import { describe, it, expect } from 'vitest';

describe('Item component', () => {
  it('adds product and updates button text', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<TestLayout />}>
            <Route
              index
              element={
                <Item
                  id={1}
                  title="Smartwatch"
                  price={199}
                  image="/smartwatch.jpg"
                  rating={{ rate: 4.3 }}
                />
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /remove from cart/i })).toBeInTheDocument();
  });
});
