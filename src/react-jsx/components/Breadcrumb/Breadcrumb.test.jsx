import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

describe('Breadcrumb and BreadcrumbItem integration', () => {
  it('renders nav with aria-label="Breadcrumb" by default, containing ol with prefixed breadcrumb class', () => {
    render(
      <Breadcrumb className="extra-class">
        <BreadcrumbItem
          url="/home"
          itemProps={{ 'data-testid': 'breadcrumb-li', id: 'li-id' }}
          urlProps={{ 'data-testid': 'breadcrumb-link', target: '_blank' }}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem isActive className="custom-li-class">
          Current
        </BreadcrumbItem>
        <BreadcrumbItem useBsClasses={false}>NoPrefix</BreadcrumbItem>
      </Breadcrumb>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    const ol = screen.getByRole('list');
    expect(ol).toBeInTheDocument();
    expect(ol.className).toContain(`${PREFIX}breadcrumb`);
    expect(ol.className).toContain('extra-class');

    const li = screen.getByText('Home').closest('li');
    expect(li).toBeInTheDocument();
    expect(li.className).toContain(`${PREFIX}breadcrumb-item`);
    expect(li).not.toHaveClass('active');
    expect(li).toHaveAttribute('id', 'li-id');
    expect(li).toHaveAttribute('data-testid', 'breadcrumb-li');
    const link = screen.getByText('Home').closest('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveAttribute('data-testid', 'breadcrumb-link');
    expect(link).toHaveAttribute('target', '_blank');

    const activeCurrentItem = screen.getByText('Current').closest('li');
    expect(activeCurrentItem).toBeInTheDocument();
    expect(activeCurrentItem.className).toContain(`${PREFIX}breadcrumb-item`);
    expect(activeCurrentItem.className).toContain('active');
    expect(activeCurrentItem.className).toContain('custom-li-class');
    expect(activeCurrentItem).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Current').closest('a')).toBeNull();

    const noPrefixitem = screen.getByText('NoPrefix').closest('li');
    expect(noPrefixitem.className).not.toContain('breadcrumb-item');
    expect(noPrefixitem.className).not.toContain(`${PREFIX}breadcrumb-item`);
  });

  it('passes navProps and listProps to nav and ol, and allows overwriting aria-label', () => {
    render(
      <Breadcrumb
        navProps={{ 'aria-label': 'Custom Breadcrumb', 'data-testid': 'nav-breadcrumb' }}
        listProps={{ 'data-testid': 'breadcrumb-list', id: 'main-list' }}
        useBsClasses={false}
      >
        <BreadcrumbItem>Item</BreadcrumbItem>
      </Breadcrumb>
    );
    const nav = screen.getByTestId('nav-breadcrumb');
    expect(nav).toHaveAttribute('aria-label', 'Custom Breadcrumb');
    const ol = screen.getByTestId('breadcrumb-list');
    expect(ol).toHaveAttribute('id', 'main-list');
    expect(ol.className).not.toContain('breadcrumb');
    expect(ol.className).not.toContain(`${PREFIX}breadcrumb`);
  });
});
