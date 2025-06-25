import React from 'react';
import { render, screen } from '@testing-library/react';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
  it('renders with wrapperClass and children', () => {
    render(
      <Wrapper wrapperClass="my-wrapper-class" className="custom-class" data-testid="my-wrapper">
        Wrapper Content
      </Wrapper>
    );
    const div = screen.getByText('Wrapper Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}my-wrapper-class`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-wrapper');
  });

  it('renders without wrapperClass if useBsClasses is false', () => {
    render(
      <Wrapper
        wrapperClass="my-wrapper-class"
        useBsClasses={false}
        className="custom-class"
        data-testid="no-wrapper-class"
      >
        No class content
      </Wrapper>
    );
    const div = screen.getByTestId('no-wrapper-class');
    expect(div).toBeInTheDocument();
    expect(div).not.toHaveClass(`${PREFIX}my-wrapper-class`);
    expect(div).not.toHaveClass('my-wrapper-class');
    expect(div).toHaveClass('custom-class');
  });

  it('renders with wrapperClass and p tag', () => {
    render(
      <Wrapper
        tag="p"
        wrapperClass="my-wrapper-class"
        className="custom-class"
        data-testid="my-wrapper"
      >
        Wrapper Content
      </Wrapper>
    );
    const p = screen.getByText('Wrapper Content').closest('p');
    expect(p).toBeInTheDocument();
    expect(p).toHaveClass(`${PREFIX}my-wrapper-class`);
    expect(p).toHaveClass('custom-class');
    expect(p).toHaveAttribute('data-testid', 'my-wrapper');
  });
});
