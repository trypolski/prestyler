import React from 'react';
import { render, screen } from '@testing-library/react';
import ListGroup from './ListGroup';
import { ListGroupItem } from '../ListGroupItem/ListGroupItem';

const VIEWPORTS = ['', 'sm', 'md', 'lg', 'xl', 'xxl'];

describe('ListGroup', () => {
  it('renders as <ul> with default class and children', () => {
    render(
      <ListGroup id="my-listgroup" data-testid="listgroup" className="custom-list-group">
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
      </ListGroup>
    );
    const ul = screen.getByTestId('listgroup');
    expect(ul).toBeInTheDocument();
    expect(ul.tagName.toLowerCase()).toBe('ul');
    expect(ul).toHaveClass(`${PREFIX}list-group`);
    expect(ul).toHaveClass('custom-list-group');
    expect(ul).toHaveAttribute('id', 'my-listgroup');
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders as <ol> with numbered class when isNumbered is true and has flush class when isFlush is true', () => {
    render(
      <ListGroup isNumbered isFlush data-testid="listgroup">
        <ListGroupItem>Numbered 1</ListGroupItem>
        <ListGroupItem>Numbered 2</ListGroupItem>
      </ListGroup>
    );
    const ol = screen.getByTestId('listgroup');
    expect(ol.tagName.toLowerCase()).toBe('ol');
    expect(ol).toHaveClass(`${PREFIX}list-group`);
    expect(ol).toHaveClass(`${PREFIX}list-group-numbered`);
    expect(ol).toHaveClass(`${PREFIX}list-group-flush`);
  });

  it.each(VIEWPORTS)('renders horizontal class with viewport=%s', (viewport) => {
    render(
      <ListGroup isHorizontal horizontalViewport={viewport} data-testid="listgroup">
        <ListGroupItem>Horizontal Item</ListGroupItem>
      </ListGroup>
    );
    const ul = screen.getByTestId('listgroup');
    expect(ul).toHaveClass(`${PREFIX}list-group-horizontal${viewport ? `-${viewport}` : ''}`);
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <ListGroup isNumbered isFlush useBsClasses={false} data-testid="listgroup">
        <ListGroupItem>Numbered 1</ListGroupItem>
        <ListGroupItem>Numbered 2</ListGroupItem>
      </ListGroup>
    );
    const ol = screen.getByTestId('listgroup');
    expect(ol.tagName.toLowerCase()).toBe('ol');
    expect(ol).not.toHaveClass(`${PREFIX}list-group`);
    expect(ol).not.toHaveClass(`${PREFIX}list-group-numbered`);
    expect(ol).not.toHaveClass(`${PREFIX}list-group-flush`);
    expect(ol).not.toHaveClass('list-group');
    expect(ol).not.toHaveClass('list-group-numbered');
    expect(ol).not.toHaveClass('list-group-flush');
  });
});
