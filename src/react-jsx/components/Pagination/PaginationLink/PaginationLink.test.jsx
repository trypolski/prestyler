import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationLink from './PaginationLink';

describe('PaginationLink', () => {
  it('renders as <a> with prefixed page-link class and passes props', () => {
    render(
      <PaginationLink
        className="custom-class"
        id="page-link-1"
        aria-label="Page Link"
        href="/page/1"
        data-testid="pagination-link"
      >
        Page 1
      </PaginationLink>
    );
    const link = screen.getByTestId('pagination-link');
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveClass(`${PREFIX}page-link`);
    expect(link).toHaveClass('custom-class');
    expect(link).not.toHaveClass(`${PREFIX}disabled`);
    expect(link).toHaveAttribute('id', 'page-link-1');
    expect(link).toHaveAttribute('aria-label', 'Page Link');
    expect(link).toHaveAttribute('href', '/page/1');
    expect(screen.getByText('Page 1')).toBeInTheDocument();
  });

  it('renders as <span> with prefixed page-link and disabled classes when disabled is true', () => {
    render(
      <PaginationLink disabled data-testid="pagination-link">
        Disabled
      </PaginationLink>
    );
    const span = screen.getByTestId('pagination-link');
    expect(span.tagName.toLowerCase()).toBe('span');
    expect(span).toHaveClass(`${PREFIX}page-link`);
    expect(span).toHaveClass(`${PREFIX}disabled`);
    expect(span).not.toHaveAttribute('href');
    expect(screen.getByText('Disabled')).toBeInTheDocument();
  });

  it('does not use Bootstrap or prefixed classes when useBsClasses is false', () => {
    render(
      <PaginationLink
        disabled
        useBsClasses={false}
        className="custom"
        data-testid="pagination-link"
      >
        None
      </PaginationLink>
    );
    const span = screen.getByTestId('pagination-link');
    expect(span).toHaveClass('custom');
    ['page-link', 'disabled'].forEach((cls) => {
      expect(span).not.toHaveClass(cls);
      expect(span).not.toHaveClass(`${PREFIX}${cls}`);
    });
  });
});
