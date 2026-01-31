import { render } from "vitest-browser-react";
import { TooltipDemo } from "./tooltip";
import { page, userEvent } from 'vitest/browser';
import { Tooltip2 } from './tooltip2';

describe("TooltipDemo Component", () => {
  test("TooltipDemo renders correctly", async() => {
    render(<TooltipDemo />);
    const button = page.getByTestId("tooltip-button");
    await userEvent.click(document.body);                                                                                                        

    await userEvent.hover(button)
    await expect.element(page.getByText("This is helpful information!")).toBeVisible();
  });

  test  ("Tooltip2 renders correctly", async() => {
    render(<Tooltip2 />);
    const button = page.getByTestId("tooltip-button");
    await userEvent.click(document.body);                                                                                                        
    await userEvent.hover(button)
    await expect.element(page.getByText("This is helpful information!").first()).toBeVisible();
  })
});
