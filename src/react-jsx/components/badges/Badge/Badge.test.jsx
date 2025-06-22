import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import { BADGE_CLASSES } from '../constants';

const { usePrestylerPrefix } = require('../../../hooks/usePrestylerPrefix');

const PREFIX = 'bs-';

// Mock the usePrestylerPrefix hook
jest.mock('../../../hooks/usePrestylerPrefix', () => ({
  usePrestylerPrefix: jest.fn(),
}));

describe('Badge', () => {
  beforeEach(() => {
    usePrestylerPrefix.mockReturnValue(PREFIX);
  });

  Object.entries(BADGE_CLASSES).forEach(([variant, className]) => {
    it(`applies correct class for variant "${variant}"`, () => {
      render(<Badge variant={variant}>{variant}</Badge>);
      const badge = screen.getByText(variant);
      expect(badge).toBeInTheDocument();
      expect(badge.className).toContain(`${PREFIX}badge`);
      expect(badge.className).toContain(`${PREFIX}${className}`);
    });
  });

  it('appends custom className', () => {
    render(<Badge className="custom-class">Badge</Badge>);
    const badge = screen.getByText('Badge');
    expect(badge.className).toMatch(/custom-class/);
  });

  it('does not prefix classes when useBsClasses is false', () => {
    render(
      <Badge useBsClasses={false} variant="primary">
        Badge
      </Badge>
    );
    const badge = screen.getByText('Badge');
    expect(badge.className).not.toContain(`${PREFIX}badge`);
    expect(badge.className).not.toContain(`${PREFIX}${BADGE_CLASSES.primary}`);
  });

  it('adds rounded-pill and absolute classes when isRounded and isAbsolute are true', () => {
    render(
      <Badge isRounded isAbsolute>
        Badge
      </Badge>
    );
    const badge = screen.getByText('Badge');
    const badgeClassName = badge.className;
    expect(badgeClassName).toContain(`${PREFIX}rounded-pill`);

    expect(badgeClassName).toContain(`${PREFIX}position-absolute`);
    expect(badgeClassName).toContain(`${PREFIX}top-0`);
    expect(badgeClassName).toContain(`${PREFIX}start-100`);
    expect(badgeClassName).toContain(`${PREFIX}translate-middle`);
  });

  it('adds position classes when isIndicator is true', () => {
    render(
      <Badge id="test" isIndicator>
        Badge
      </Badge>
    );
    const badge = screen.getByTestId(`badge-wrapper${'-test'}`);
    const badgeClassName = badge.className;
    expect(badge).toBeInTheDocument();

    expect(badgeClassName).toContain(`${PREFIX}position-absolute`);
    expect(badgeClassName).toContain(`${PREFIX}top-0`);
    expect(badgeClassName).toContain(`${PREFIX}start-100`);
    expect(badgeClassName).toContain(`${PREFIX}translate-middle`);

    expect(badgeClassName).toContain(`${PREFIX}border`);
    expect(badgeClassName).toContain(`${PREFIX}border-light`);
    expect(badgeClassName).toContain(`${PREFIX}rounded-circle`);
    expect(badgeClassName).toContain(`${PREFIX}p-2`);

    const defaultIndicatorSpan = screen.getByText('New alerts');
    expect(defaultIndicatorSpan.className).toContain(`${PREFIX}visually-hidden`);
  });

  it('adds indicatorLabel instead of custom one', () => {
    render(
      <Badge isIndicator indicatorLabel="Alert!">
        Badge
      </Badge>
    );
    const customIndicatorSpan = screen.getByText('Alert!');
    expect(customIndicatorSpan.className).toContain(`${PREFIX}visually-hidden`);
  });

  it('passes additional props to the span', () => {
    render(
      <Badge id="custom-id" title="Custom Title">
        Badge
      </Badge>
    );
    const badge = screen.getByText('Badge');
    expect(badge).toHaveAttribute('id', 'custom-id');
    expect(badge).toHaveAttribute('title', 'Custom Title');
  });
});
