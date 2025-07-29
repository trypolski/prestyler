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

  it('renders with wrapperClass and ul tag', () => {
    render(
      <Wrapper
        tag="ul"
        wrapperClass="my-wrapper-class"
        className="custom-class"
        data-testid="my-wrapper"
      >
        Wrapper Content
      </Wrapper>
    );
    const ul = screen.getByText('Wrapper Content').closest('ul');
    expect(ul).toBeInTheDocument();
    expect(ul).toHaveClass(`${PREFIX}my-wrapper-class`);
    expect(ul).toHaveClass('custom-class');
    expect(ul).toHaveAttribute('data-testid', 'my-wrapper');
  });

  it('renders with wrapperClass and li tag', () => {
    render(
      <Wrapper
        tag="li"
        wrapperClass="my-wrapper-class"
        className="custom-class"
        data-testid="my-wrapper"
      >
        Wrapper Content
      </Wrapper>
    );
    const li = screen.getByText('Wrapper Content').closest('li');
    expect(li).toBeInTheDocument();
    expect(li).toHaveClass(`${PREFIX}my-wrapper-class`);
    expect(li).toHaveClass('custom-class');
    expect(li).toHaveAttribute('data-testid', 'my-wrapper');
  });

  it('renders with wrapperClass and section tag', () => {
    render(
      <Wrapper
        tag="section"
        wrapperClass="my-wrapper-class"
        className="custom-class"
        data-testid="my-wrapper"
      >
        Wrapper Content
      </Wrapper>
    );
    const section = screen.getByText('Wrapper Content').closest('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass(`${PREFIX}my-wrapper-class`);
    expect(section).toHaveClass('custom-class');
    expect(section).toHaveAttribute('data-testid', 'my-wrapper');
  });

  it('renders with wrapperClass and article tag', () => {
    render(
      <Wrapper
        tag="article"
        wrapperClass="my-wrapper-class"
        className="custom-class"
        data-testid="my-wrapper"
      >
        Wrapper Content
      </Wrapper>
    );
    const article = screen.getByText('Wrapper Content').closest('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass(`${PREFIX}my-wrapper-class`);
    expect(article).toHaveClass('custom-class');
    expect(article).toHaveAttribute('data-testid', 'my-wrapper');
  });
});
