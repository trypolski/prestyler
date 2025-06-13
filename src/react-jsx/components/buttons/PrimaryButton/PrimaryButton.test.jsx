import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

// Mock usePrestylerPrefix to avoid errors in ButtonBaseComponent
jest.mock("../../../hooks/usePrestylerPrefix", () => ({
  usePrestylerPrefix: jest.fn(() => "pre-"),
}));

describe("PrimaryButton (integration with real ButtonBaseComponent)", () => {
  it("renders children correctly", () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies prefixed bsClasses", () => {
    render(<PrimaryButton>Test</PrimaryButton>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/pre-btn/);
    expect(btn.className).toMatch(/pre-btn-primary/);
  });

  it("passes additional props to ButtonBaseComponent", () => {
    const handleClick = jest.fn();
    render(
      <PrimaryButton type="submit" onClick={handleClick}>
        Test
      </PrimaryButton>
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  it("appends additional className prop", () => {
    render(<PrimaryButton className="extra-class">Test</PrimaryButton>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/extra-class/);
    expect(btn.className).toMatch(/pre-btn/);
  });

  it("always overrides bsClasses prop", () => {
    render(<PrimaryButton bsClasses="should-not-appear">Test</PrimaryButton>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/pre-btn/);
    expect(btn.className).toMatch(/pre-btn-primary/);
    expect(btn.className).not.toMatch(/should-not-appear/);
  });

  it("renders as a button element by default", () => {
    render(<PrimaryButton>Test</PrimaryButton>);
    expect(screen.getByRole("button").tagName).toBe("BUTTON");
  });

  it("forwards arbitrary props to the button", () => {
    render(<PrimaryButton data-test="custom-attr">Test</PrimaryButton>);
    expect(screen.getByRole("button")).toHaveAttribute("data-test", "custom-attr");
  });

  it("renders with no children without crashing", () => {
    render(<PrimaryButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
