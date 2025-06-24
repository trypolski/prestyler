import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonToolbar from './ButtonToolbar';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { Button } from '../buttons/Buttons';

const { usePrestylerPrefix } = require('../../hooks/usePrestylerPrefix');

// Mock only the usePrestylerPrefix hook to control the prefix
jest.mock('../../hooks/usePrestylerPrefix', () => ({
  usePrestylerPrefix: jest.fn(),
}));

const PREFIX = 'bs-';

describe('ButtonToolbar', () => {
  beforeEach(() => {
    usePrestylerPrefix.mockReturnValue(PREFIX);
  });

  it('renders with default BS style, prefixed btn-toolbar class, custom className, and role="toolbar"', () => {
    render(
      <ButtonToolbar className="custom-toolbar" aria-label="Custom Toolbar">
        <ButtonGroup>
          <Button>Button 1</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
    const div = screen.getByRole('toolbar');
    expect(div).toBeInTheDocument();
    expect(div.className).toContain(`${PREFIX}btn-toolbar`);
    expect(div.className).toContain('custom-toolbar');
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(div).toHaveAttribute('aria-label', 'Custom Toolbar');
  });

  it('does not prefix classes when useBsClasses is false', () => {
    render(
      <ButtonToolbar useBsClasses={false} className="plain-toolbar">
        <ButtonGroup>
          <Button>PlainBtn</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
    const div = screen.getByRole('toolbar');
    expect(div.className).toContain('plain-toolbar');
    expect(div.className).not.toContain('btn-toolbar');
    expect(div.className).not.toContain(`${PREFIX}btn-toolbar`);
  });
});
