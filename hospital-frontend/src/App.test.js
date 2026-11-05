import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hospital system navbar", () => {
  render(<App />);
  const navbarText = screen.getByText(/Hospital System/i);
  expect(navbarText).toBeInTheDocument();
});