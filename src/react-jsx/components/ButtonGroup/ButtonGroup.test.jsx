import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import { Button } from '../buttons/Buttons'; // Assuming Button is the base button component

describe('ButtonGroup', () => {
  it('renders with default BS style, prefixed btn-group class, custom className, and role="group"', () => {
    render(
      <ButtonGroup className="custom-class" aria-label="Button group">
        <Button>Button</Button>
      </ButtonGroup>
    );
    const div = screen.getByRole('group');
    expect(div).toBeInTheDocument();
    expect(div.className).toContain(`${PREFIX}btn-group`);
    expect(div.className).toContain('custom-class');
    expect(div).not.toHaveClass(`${PREFIX}btn-group-vertical`);
    expect(div).not.toHaveClass(`${PREFIX}btn-group-lg`);
    expect(div).not.toHaveClass(`${PREFIX}btn-group-sm`);
    expect(screen.getByText('Button')).toBeInTheDocument();
    expect(div).toHaveAttribute('aria-label', 'Button group');
  });

  it('applies only isLarge size class', () => {
    render(
      <ButtonGroup isLarge>
        <Button>Large</Button>
      </ButtonGroup>
    );
    const div = screen.getByRole('group');
    expect(div.className).toContain(`${PREFIX}btn-group`);
    expect(div.className).toContain(`${PREFIX}btn-group-lg`);
    expect(div.className).not.toContain(`${PREFIX}btn-group-sm`);
    expect(div.className).not.toContain(`${PREFIX}btn-group-vertical`);
  });

  it('applies only isSmall size class', () => {
    render(
      <ButtonGroup isSmall>
        <Button>Small</Button>
      </ButtonGroup>
    );
    const div = screen.getByRole('group');
    expect(div.className).toContain(`${PREFIX}btn-group`);
    expect(div.className).toContain(`${PREFIX}btn-group-sm`);
    expect(div.className).not.toContain(`${PREFIX}btn-group-lg`);
    expect(div.className).not.toContain(`${PREFIX}btn-group-vertical`);
  });

  it('applies only isVertical class', () => {
    render(
      <ButtonGroup isVertical>
        <Button>Vertical</Button>
      </ButtonGroup>
    );
    const div = screen.getByRole('group');
    const classList = div.className.split(' ');
    expect(classList).toContain(`${PREFIX}btn-group-vertical`);
    expect(classList).not.toContain(`${PREFIX}btn-group`);
    expect(classList).not.toContain(`${PREFIX}btn-group-lg`);
    expect(classList).not.toContain(`${PREFIX}btn-group-sm`);
  });

  it('does not prefix classes when useBsClasses is false', () => {
    render(
      <ButtonGroup useBsClasses={false} isLarge isVertical className="plain">
        <button type="button">Plain</button>
      </ButtonGroup>
    );
    const div = screen.getByRole('group');
    expect(div.className).toContain('plain');
    expect(div.className).not.toContain('btn-group');
    expect(div.className).not.toContain('btn-group-vertical');
    expect(div.className).not.toContain('btn-group-lg');
    expect(div.className).not.toContain(`${PREFIX}btn-group`);
    expect(div.className).not.toContain(`${PREFIX}btn-group-vertical`);
    expect(div.className).not.toContain(`${PREFIX}btn-group-lg`);
  });
});
