import { screen, render } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  test("Renders correctly", () => {
    render(<Navbar />);
    const bStoreText = screen.getByText(/bstore/i);
    expect(bStoreText).toBeInDocument();
  });
});
