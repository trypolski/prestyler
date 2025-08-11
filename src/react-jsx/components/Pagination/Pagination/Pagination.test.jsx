import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders as <ul> with prefixed pagination class and passes props', () => {
    render(
      <Pagination
        className="custom-class"
        id="main-pagination"
        aria-label="My Pagination"
        data-testid="pagination"
      >
        <li>Page 1</li>
      </Pagination>
    );
    const ul = screen.getByTestId('pagination');
    expect(ul.tagName.toLocaleLowerCase()).toBe('ul');
    expect(ul).toHaveClass(`${PREFIX}pagination`);
    expect(ul).toHaveClass('custom-class');
    expect(ul).not.toHaveClass(`${PREFIX}pagination-sm`);
    expect(ul).not.toHaveClass(`${PREFIX}pagination-lg`);
    expect(ul).toHaveAttribute('id', 'main-pagination');
    expect(ul).toHaveAttribute('aria-label', 'My Pagination');
    expect(screen.getByText('Page 1')).toBeInTheDocument();
  });

  it('adds prefixed pagination-sm class when isSmall is true', () => {
    render(
      <Pagination isSmall data-testid="pagination">
        <li>Small</li>
      </Pagination>
    );
    const ul = screen.getByTestId('pagination');
    expect(ul).toHaveClass(`${PREFIX}pagination`);
    expect(ul).toHaveClass(`${PREFIX}pagination-sm`);
    expect(ul).not.toHaveClass(`${PREFIX}pagination-lg`);
  });

  it('adds prefixed pagination-lg class when isLarge is true', () => {
    render(
      <Pagination isLarge data-testid="pagination">
        <li>Large</li>
      </Pagination>
    );
    const ul = screen.getByTestId('pagination');
    expect(ul).toHaveClass(`${PREFIX}pagination`);
    expect(ul).toHaveClass(`${PREFIX}pagination-lg`);
    expect(ul).not.toHaveClass(`${PREFIX}pagination-sm`);
  });

  it('does not use Bootstrap or prefixed classes when useBsClasses is false', () => {
    render(
      <Pagination isSmall isLarge useBsClasses={false} className="custom" data-testid="pagination">
        <li>None</li>
      </Pagination>
    );
    const ul = screen.getByTestId('pagination');
    expect(ul).toHaveClass('custom');
    ['pagination', 'pagination-sm', 'pagination-lg'].forEach((cls) => {
      expect(ul).not.toHaveClass(cls);
      expect(ul).not.toHaveClass(`${PREFIX}${cls}`);
    });
  });
});
