import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from './Collapse';

describe('Collapse', () => {
  it('renders collapse content hidden when show is false', () => {
    render(
      <Collapse
        id="collapse-1"
        show={false}
        collapseClassName="custom-collapse"
        bodyClassName="custom-body"
      >
        Collapsed Content
      </Collapse>
    );
    // Collapse div should be present with correct id and class
    const collapseDiv = screen.getByTestId('collapse-collapse-1');
    expect(collapseDiv).toBeInTheDocument();
    expect(collapseDiv).toHaveAttribute('id', 'collapse-1');
    expect(collapseDiv).toHaveClass(`${PREFIX}collapse`);
    expect(collapseDiv).toHaveClass('custom-collapse');
    // Body div should be present with correct class and content
    const bodyDiv = collapseDiv.querySelector('div');
    expect(bodyDiv).toHaveClass('custom-body');
    expect(bodyDiv).toHaveTextContent('Collapsed Content');
  });

  it('renders collapse content visible when show is true', () => {
    render(<Collapse show>Expanded Content</Collapse>);
    const collapseDiv = screen.getByTestId('collapse');
    expect(collapseDiv).toBeInTheDocument();
    expect(collapseDiv).not.toHaveAttribute('id');
    expect(collapseDiv).toHaveClass(`${PREFIX}collapsing`);
    expect(collapseDiv).not.toHaveClass(`${PREFIX}show`);
    fireEvent.transitionEnd(collapseDiv);
    expect(collapseDiv).toHaveClass(`${PREFIX}collapse`);
    expect(collapseDiv).toHaveClass(`${PREFIX}show`);
    expect(collapseDiv).not.toHaveClass(`${PREFIX}collapsing`);
    const bodyDiv = collapseDiv.querySelector('div');
    expect(bodyDiv).toHaveTextContent('Expanded Content');
  });

  it('renders horizontal collapse content visible when show is true', () => {
    render(
      <Collapse show={false} horizontal bodyWidth="300px">
        Expanded Content
      </Collapse>
    );
    const collapseDiv = screen.getByTestId('collapse');
    expect(collapseDiv).toBeInTheDocument();
    expect(collapseDiv).toHaveClass(`${PREFIX}collapse`);
    expect(collapseDiv).toHaveClass(`${PREFIX}collapse-horizontal`);
    expect(collapseDiv).not.toHaveClass(`${PREFIX}accordion-collapse`);
    // Body div should be present with correct class and content
    const bodyDiv = collapseDiv.querySelector('div');
    expect(bodyDiv).toHaveStyle({ width: '300px' });
  });

  it('does not apply Bootstrap class when useBsClasses is false', () => {
    render(
      <Collapse show useBsClasses={false}>
        Expanded Content
      </Collapse>
    );
    const collapseDiv = screen.getByTestId('collapse');
    expect(collapseDiv).not.toHaveClass(`${PREFIX}collapse`);
    expect(collapseDiv).not.toHaveClass('collapse');
  });
});
