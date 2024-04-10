import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer.jsx";
import HeroSlider from "../HeroSlider/HeroSlider.jsx";
import ProductList from "../ProductList/ProductList.jsx";
import QualityAssurance from "../QualityAssurance/QualityAssurance.jsx";

//Footer

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("displays correct contact information", () => {
    const { getByText, getByAltText } = render(<Footer />);
    const emailLink = getByText("help@steelandstubble.com");
    const phoneNumber = getByText("(800) 555-1212");
    const logo = getByAltText("Steel & Stubble Logo");

    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:help@steelandstubble.com"
    );
    expect(phoneNumber).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it("displays social media icons with correct links", () => {
    render(<Footer />);
    const facebookLink = screen.getByRole("link", { name: /facebook/i });
    const twitterLink = screen.getByRole("link", { name: /twitter/i });
    const instagramLink = screen.getByRole("link", { name: /instagram/i });

    expect(facebookLink).toHaveAttribute("href", "https://facebook.com");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com");
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com");
  });

  it("displays correct copyright information", () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(
      "© 2024 Steel & Stubble. All Rights Reserved."
    );

    expect(copyrightText).toBeInTheDocument();
  });
});

//Hero Slider

jest.useFakeTimers();

describe("HeroSlider Component", () => {
  it("renders without crashing", () => {
    render(<HeroSlider />);
  });

  it("displays slides with correct images", () => {
    const { container } = render(<HeroSlider />);
    const slides = container.querySelectorAll(".slide");

    expect(slides).toHaveLength(4);
  });
});

//Product List
jest.mock("../../api", () => ({
  getProducts: () => [
    { id: "1", name: "Shave Gel", price: "10.99" },
    { id: "2", name: "Post-Shave Balm", price: "27.99" },
  ],
}));

describe("ProductList Component", () => {
  it("renders without crashing", () => {
    render(<ProductList onProductSelect={() => {}} />);
  });

  it("displays list of products correctly", () => {
    render(<ProductList onProductSelect={jest.fn()} />);

    const product1Name = screen.getByText(/Shave Gel/);
    const product1Price = screen.getByText(/\$ 10\.99 CAD/);
    const product2Name = screen.getByText(/Post-Shave Balm/);
    const product2Price = screen.getByText(/\$ 27\.99 CAD/);

    expect(product1Name).toBeInTheDocument();
    expect(product1Price).toBeInTheDocument();
    expect(product2Name).toBeInTheDocument();
    expect(product2Price).toBeInTheDocument();
  });
});

//Quality Assurance

describe("QualityAssurance Component", () => {
  it("renders without crashing", () => {
    render(<QualityAssurance />);
  });

  it("displays the logo correctly", () => {
    const { getByAltText } = render(<QualityAssurance />);
    const logo = getByAltText("Steel & Stubble Logo");

    expect(logo).toBeInTheDocument();
  });

  it("displays the quality assurance text correctly", () => {
    const { getByText } = render(<QualityAssurance />);
    const header = getByText("Steel & Stubble Quality Guarantee");
    const text = getByText(/Experience the Steel & Stubble Difference/);

    expect(header).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
