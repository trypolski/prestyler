import React from 'react';
import { render, screen } from '@testing-library/react';
import DropdownHeader from './DropdownHeader';

describe('DropdownHeader', () => {
  it('renders with default tag (h5), class, and children', () => {
    render(
      <DropdownHeader
        className="custom-class"
        data-testid="my-dropdown-header"
        aria-label="labelled-dropdown-header"
      >
        Dropdown Header Content
      </DropdownHeader>
    );
    const heading = screen.getByTestId('my-dropdown-header');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h5');
    expect(heading).toHaveClass(`${PREFIX}dropdown-header`);
    expect(heading).toHaveClass('custom-class');
    expect(heading).toHaveTextContent('Dropdown Header Content');
    expect(heading).toHaveAttribute('aria-label', 'labelled-dropdown-header');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <DropdownHeader useBsClasses={false} className="custom-class">
        No Prefix
      </DropdownHeader>
    );
    const heading = screen.getByText('No Prefix');
    expect(heading).toHaveClass('custom-class');
    expect(heading).not.toHaveClass(`${PREFIX}dropdown-header`);
    expect(heading).not.toHaveClass('dropdown-header');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])('renders with tag=%s', (tag) => {
    render(
      <DropdownHeader tag={tag} data-testid={`dropdown-header-${tag}`}>
        {tag} Dropdown Header
      </DropdownHeader>
    );
    const heading = screen.getByTestId(`dropdown-header-${tag}`);
    expect(heading.tagName.toLowerCase()).toBe(tag);
    expect(heading).toHaveTextContent(`${tag} Dropdown Header`);
  });
});
