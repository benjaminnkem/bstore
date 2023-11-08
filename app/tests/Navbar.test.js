import { screen, render } from "@testing-library/react";
import Navbar from "../../components/Layouts/Navbar";

describe("Navbar", () => {
  test("Renders correctly", () => {
    render(<Navbar />);
    const bStoreText = screen.getByText(/b/i);
    expect(bStoreText).toBeInDocument();
  });
});
