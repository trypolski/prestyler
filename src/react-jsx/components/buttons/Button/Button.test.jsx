import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BUTTON_CLASSES, BUTTON_SIZES } from "../constants";
const { usePrestylerPrefix } = require("../../../hooks/usePrestylerPrefix");

const PREFIX = "bs-";

// Helper to get button element
const getButton = () => screen.getByRole("button");

// Mock the usePrestylerPrefix hook
jest.mock("../../../hooks/usePrestylerPrefix", () => ({
  usePrestylerPrefix: jest.fn(),
}));

describe("Button", () => {
  beforeEach(() => {
    usePrestylerPrefix.mockReturnValue(PREFIX);
  });

  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(getButton()).toHaveTextContent("Click me");
  });

  it("uses only 'btn' class for default variant", () => {
    render(<Button>Default</Button>);
    expect(getButton().className.split(" ")).toContain(`${PREFIX}btn`);
    expect(getButton().className.split(" ")).toHaveLength(1);
  });

  // Test each BUTTON_CLASSES variant
  Object.entries(BUTTON_CLASSES).forEach(([variant, className]) => {
    it(`applies correct bsClasses for variant="${variant}"`, () => {
      render(<Button variant={variant}>Test {variant}</Button>);
      const btn = getButton();
      expect(btn.className.split(" ")).toContain(`${PREFIX}btn`);
      const prefixedClass = className.split(" ").map(cls => `${PREFIX}${cls}`).join(" ");
      expect(btn.className.split(" ")).toContain(prefixedClass);
    });
  });

  // Test isLarge with primary
  it("applies large size class with primary variant", () => {
    render(<Button variant="primary" isLarge>Large Primary</Button>);
    const btn = getButton();
    expect(btn.className.split(" ")).toContain(`${PREFIX}btn`);
    expect(btn.className.split(" ")).toContain(`${PREFIX}${BUTTON_CLASSES.primary}`);
    expect(btn.className.split(" ")).toContain(`${PREFIX}${BUTTON_SIZES.large}`);
    expect(btn.className.split(" ")).not.toContain(`${PREFIX}${BUTTON_SIZES.small}`);
  });

  // Test isSmall with primary
  it("applies small size class with primary variant", () => {
    render(<Button variant="primary" isSmall>Small Primary</Button>);
    const btn = getButton();
    expect(btn.className.split(" ")).toContain(`${PREFIX}btn`);
    expect(btn.className.split(" ")).toContain(`${PREFIX}${BUTTON_CLASSES.primary}`);
    expect(btn.className.split(" ")).toContain(`${PREFIX}${BUTTON_SIZES.small}`);
    expect(btn.className.split(" ")).not.toContain(`${PREFIX}${BUTTON_SIZES.large}`);
  });

  // isOutlined for primary
  it("applies outlined classes for primary", () => {
    render(<Button variant="primary" isOutlined>Outlined Primary</Button>);
    const btn = getButton();
    expect(btn.className.split(" ")).toContain(`${PREFIX}btn`);
    expect(btn.className.split(" ")).toContain(`${PREFIX}btn-outline-primary`);
    expect(btn.className.split(" ")).not.toContain(`${PREFIX}btn-primary`);
  });

  it("passes additional props to ButtonBaseComponent", () => {
    render(<Button variant="primary" type="submit" data-test="foo">Props</Button>);
    const btn = getButton();
    expect(btn).toHaveAttribute("type", "submit");
    expect(btn).toHaveAttribute("data-test", "foo");
    expect(btn).toHaveTextContent("Props");
  });

  it('renders an <a> element with role "button" when isLink is true', () => {
    render(
      <Button isLink href="https://example.com">
        Link Button
      </Button>
    );
    const link = screen.getByRole("button", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
