import React from 'react';
import { render, screen } from '@testing-library/react';
import ListGroupItem from './ListGroupItemBaseComponent';

describe('ListGroupItemBaseComponent', () => {
  it('renders as <li> with default class and children', () => {
    render(<ListGroupItem data-testid="list-item">Item Content</ListGroupItem>);
    const li = screen.getByTestId('list-item');
    expect(li).toBeInTheDocument();
    expect(li.tagName.toLowerCase()).toBe('li');
    expect(li).toHaveClass(`${PREFIX}list-group-item`);
    expect(li).toHaveTextContent('Item Content');
  });

  it('renders as <li> with variant, custom className, id, isHorizontalEqualWidth, isActive, isLink and disabled props', () => {
    render(
      <ListGroupItem
        id="primary-item"
        variant="primary"
        data-testid="list-item"
        className="custom-class"
        isHorizontalEqualWidth
        isActive
        isLink
        disabled
        href="#"
      >
        Primary Item
      </ListGroupItem>
    );
    const link = screen.getByTestId('list-item');
    expect(link).toBeInTheDocument();
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveClass(`${PREFIX}list-group-item`);
    expect(link).toHaveClass(`${PREFIX}list-group-item-primary`);
    expect(link).toHaveClass(`${PREFIX}active`);
    expect(link).toHaveClass(`${PREFIX}disabled`);
    expect(link).toHaveClass(`${PREFIX}flex-fill`);
    expect(link).toHaveClass(`${PREFIX}list-group-item-action`);
    expect(link).toHaveClass('custom-class');
    expect(link).toHaveAttribute('id', 'primary-item');
    expect(link).toHaveAttribute('href', '#');
    expect(link).toHaveAttribute('aria-current', 'true');
    expect(link).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders as <button> with isButton and sets aria-disabled', () => {
    render(
      <ListGroupItem isButton disabled data-testid="list-item">
        Button Item
      </ListGroupItem>
    );
    const button = screen.getByTestId('list-item');
    expect(button.tagName.toLowerCase()).toBe('button');
    expect(button).toHaveClass(`${PREFIX}list-group-item`);
    expect(button).toHaveClass(`${PREFIX}list-group-item-action`);
    expect(button).toHaveClass(`${PREFIX}disabled`);
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('disabled');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <ListGroupItem useBsClasses={false} isActive isLink data-testid="list-item">
        No Prefix
      </ListGroupItem>
    );
    const a = screen.getByTestId('list-item');
    expect(a).not.toHaveClass(`${PREFIX}list-group-item`);
    expect(a).not.toHaveClass(`${PREFIX}list-group-item-action`);
    expect(a).not.toHaveClass(`${PREFIX}active`);
    expect(a).not.toHaveClass('list-group-item');
    expect(a).not.toHaveClass('list-group-item-action');
    expect(a).not.toHaveClass('active');
  });
});
