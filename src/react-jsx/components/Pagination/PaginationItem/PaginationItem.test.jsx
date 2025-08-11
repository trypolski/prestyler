import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationItem from './PaginationItem';

describe('PaginationItem', () => {
  it('renders as <li> with prefixed page-item class and passes props', () => {
    render(
      <PaginationItem
        className="custom-class"
        id="page-item-1"
        aria-label="Page Item"
        data-testid="pagination-item"
      >
        Page 1
      </PaginationItem>
    );
    const li = screen.getByTestId('pagination-item');
    expect(li.tagName.toLowerCase()).toBe('li');
    expect(li).toHaveClass(`${PREFIX}page-item`);
    expect(li).toHaveClass('custom-class');
    expect(li).not.toHaveClass(`${PREFIX}active`);
    expect(li).not.toHaveClass(`${PREFIX}disabled`);
    expect(li).toHaveAttribute('id', 'page-item-1');
    expect(li).toHaveAttribute('aria-label', 'Page Item');
    expect(screen.getByText('Page 1')).toBeInTheDocument();
  });

  it('adds prefixed active class when isActive is true', () => {
    render(
      <PaginationItem isActive data-testid="pagination-item">
        Active
      </PaginationItem>
    );
    const li = screen.getByTestId('pagination-item');
    expect(li).toHaveClass(`${PREFIX}page-item`);
    expect(li).toHaveClass(`${PREFIX}active`);
    expect(li).not.toHaveClass(`${PREFIX}disabled`);
  });

  it('adds prefixed disabled class when disabled is true', () => {
    render(
      <PaginationItem disabled data-testid="pagination-item">
        Disabled
      </PaginationItem>
    );
    const li = screen.getByTestId('pagination-item');
    expect(li).toHaveClass(`${PREFIX}page-item`);
    expect(li).toHaveClass(`${PREFIX}disabled`);
    expect(li).not.toHaveClass(`${PREFIX}active`);
  });

  it('adds both active and disabled classes when both props are true', () => {
    render(
      <PaginationItem isActive disabled data-testid="pagination-item">
        Both
      </PaginationItem>
    );
    const li = screen.getByTestId('pagination-item');
    expect(li).toHaveClass(`${PREFIX}page-item`);
    expect(li).toHaveClass(`${PREFIX}active`);
    expect(li).toHaveClass(`${PREFIX}disabled`);
  });

  it('does not use Bootstrap or prefixed classes when useBsClasses is false', () => {
    render(
      <PaginationItem
        isActive
        disabled
        useBsClasses={false}
        className="custom"
        data-testid="pagination-item"
      >
        None
      </PaginationItem>
    );
    const li = screen.getByTestId('pagination-item');
    expect(li).toHaveClass('custom');
    ['page-item', 'active', 'disabled'].forEach((cls) => {
      expect(li).not.toHaveClass(cls);
      expect(li).not.toHaveClass(`${PREFIX}${cls}`);
    });
  });
});
