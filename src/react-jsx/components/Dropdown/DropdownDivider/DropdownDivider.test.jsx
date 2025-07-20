import React from 'react';
import { render, screen } from '@testing-library/react';
import DropdownDivider from './DropdownDivider';

describe('DropdownDivider', () => {
  it('renders with default class and children', () => {
    render(<DropdownDivider className="custom-class" data-testid="my-dropdown-divider" />);
    const hr = screen.getByRole('separator');
    expect(hr).toBeInTheDocument();
    expect(hr).toHaveClass(`${PREFIX}dropdown-divider`);
    expect(hr).toHaveClass('custom-class');
    expect(hr).toHaveAttribute('data-testid', 'my-dropdown-divider');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<DropdownDivider useBsClasses={false} />);
    const hr = screen.getByRole('separator');
    expect(hr).not.toHaveClass('dropdown-divider');
    expect(hr).not.toHaveClass(`${PREFIX}dropdown-divider`);
  });
});
