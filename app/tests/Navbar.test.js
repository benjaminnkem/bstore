import { screen, render } from "@testing-library/react";
import Navbar from "../../components/Layouts/Navbar";

describe("Navbar", () => {
  test("Renders correctly", () => {
    render(<Navbar />);
    const bStoreText = screen.getByText(/bstore/i);
    expect(bStoreText).toBeInDocument();
  });
});
