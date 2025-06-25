import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders with headerClass and children using default tag (h5)', () => {
    render(
      <Header headerClass="my-header-class" className="custom-class" data-testid="my-header">
        Header Content
      </Header>
    );
    const heading = screen.getByTestId('my-header');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h5');
    expect(heading).toHaveClass(`${PREFIX}my-header-class`);
    expect(heading).toHaveClass('custom-class');
    expect(heading).toHaveTextContent('Header Content');
  });

  it('renders without headerClass if useBsClasses is false', () => {
    render(
      <Header
        headerClass="my-header-class"
        useBsClasses={false}
        className="custom-class"
        data-testid="no-header-class"
      >
        No class content
      </Header>
    );
    const heading = screen.getByTestId('no-header-class');
    expect(heading).toBeInTheDocument();
    expect(heading).not.toHaveClass(`${PREFIX}my-header-class`);
    expect(heading).not.toHaveClass('my-header-class');
    expect(heading).toHaveClass('custom-class');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])('renders with tag=%s', (tag) => {
    render(
      <Header tag={tag} headerClass="header-class" data-testid={`header-${tag}`}>
        {tag} Header
      </Header>
    );
    const heading = screen.getByTestId(`header-${tag}`);
    expect(heading.tagName.toLowerCase()).toBe(tag);
    expect(heading).toHaveTextContent(`${tag} Header`);
    expect(heading).toHaveClass(`${PREFIX}header-class`);
  });
});
