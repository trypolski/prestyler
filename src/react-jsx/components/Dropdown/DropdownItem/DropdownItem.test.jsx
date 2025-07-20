import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import DropdownItem from './DropdownItem';

describe('DropdownItem', () => {
  it('renders DropdownItem with default props, without Text, Button or Link', () => {
    render(
      <DropdownItem listItemClassName="custom-list-class" data-testid="dropdown-item-btn">
        <p data-testid="dropdown-item-content">Item</p>
      </DropdownItem>
    );
    const li = screen.getByRole('listitem');
    expect(li.tagName.toLowerCase()).toBe('li');
    expect(li).toHaveClass('custom-list-class');
    expect(li.querySelector('button')).toBeNull();
    expect(li.querySelector('a')).toBeNull();
    expect(li.querySelector('span')).toBeNull();
    const p = screen.getByTestId('dropdown-item-content');
    expect(p.tagName.toLowerCase()).toBe('p');
    expect(p).toHaveTextContent('Item');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <DropdownItem isButton useBsClasses={false} data-testid="dropdown-item-noprefix">
        No Prefix
      </DropdownItem>
    );
    const btn = screen.getByTestId('dropdown-item-noprefix');
    expect(btn).not.toHaveClass(`${PREFIX}dropdown-item`);
    expect(btn).not.toHaveClass('dropdown-item');
  });

  it('renders as a button with correct classes,children, and pass additional props', () => {
    render(
      <DropdownItem
        isButton
        className="custom-button-class"
        data-testid="dropdown-item-btn"
        id="my-dropdown-item-button"
        listItemProps={{ id: 'my-dropdown-item-li' }}
      >
        Button Item
      </DropdownItem>
    );
    const li = screen.getByRole('listitem');
    expect(li).toHaveAttribute('id', 'my-dropdown-item-li');
    const btn = within(li).getByTestId('dropdown-item-btn');
    expect(btn).toBeInTheDocument();
    expect(btn.tagName.toLowerCase()).toBe('button');
    expect(btn).toHaveClass(`${PREFIX}dropdown-item`);
    expect(btn).toHaveClass('custom-button-class');
    expect(btn).toHaveTextContent('Button Item');
    expect(btn).toHaveAttribute('id', 'my-dropdown-item-button');
  });

  it('renders as a span with dropdown-item-text class when isText is true', () => {
    render(
      <DropdownItem isText data-testid="dropdown-item-text" className="custom-span-class">
        Text Item
      </DropdownItem>
    );
    const span = within(screen.getByRole('listitem')).getByTestId('dropdown-item-text');
    expect(span.tagName.toLowerCase()).toBe('span');
    expect(span).toHaveClass(`${PREFIX}dropdown-item-text`);
    expect(span).toHaveClass('custom-span-class');
    expect(span).toHaveTextContent('Text Item');
  });

  it('renders as a link with correct href and classes when isLink is true', () => {
    render(
      <DropdownItem
        isLink
        href="https://example.com"
        className="custom-link-class"
        data-testid="dropdown-item-link"
      >
        Link Item
      </DropdownItem>
    );
    const link = within(screen.getByRole('listitem')).getByTestId('dropdown-item-link');
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).not.toHaveAttribute('aria-disabled');
    expect(link).toHaveClass(`${PREFIX}dropdown-item`);
    expect(link).toHaveClass('custom-link-class');
    expect(link).toHaveTextContent('Link Item');
  });

  it('renders as a link with aria-disabled when disabled', () => {
    render(
      <DropdownItem isLink disabled data-testid="dropdown-item-link-disabled">
        Disabled Link
      </DropdownItem>
    );
    const link = screen.getByTestId('dropdown-item-link-disabled');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveClass(`${PREFIX}disabled`);
  });

  it('renders as a button with disabled attribute when disabled', () => {
    render(
      <DropdownItem isButton disabled data-testid="dropdown-item-btn-disabled">
        Disabled Button
      </DropdownItem>
    );
    const btn = screen.getByTestId('dropdown-item-btn-disabled');
    expect(btn).toBeDisabled();
    expect(btn).toHaveClass(`${PREFIX}disabled`);
  });

  it('applies active class when isActive is true', () => {
    render(
      <DropdownItem isButton isActive data-testid="dropdown-item-active">
        Active Button
      </DropdownItem>
    );
    const btn = screen.getByTestId('dropdown-item-active');
    expect(btn).toHaveClass(`${PREFIX}active`);
  });

  it('calls onClick handler when rendered as button', () => {
    const handleClick = jest.fn();
    render(
      <DropdownItem isButton onClick={handleClick} data-testid="dropdown-item-click">
        Clickable
      </DropdownItem>
    );
    const btn = screen.getByTestId('dropdown-item-click');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
