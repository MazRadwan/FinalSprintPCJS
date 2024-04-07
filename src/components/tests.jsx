import React from 'react';
import { render } from '@testing-library/react';
import FeaturedIn from './FeaturedIn';

//Featured In

describe('FeaturedIn Component', () => {
  it('renders without crashing', () => {
    render(<FeaturedIn />);
  });

  it('displays logos when scrolled into view', () => {
    const { getByAltText } = render(<FeaturedIn />);
    const esquireLogo = getByAltText('Esquire Logo');
    const gqLogo = getByAltText('GQ Logo');
    const mensHealthLogo = getByAltText("Men's Health Logo");

    expect(esquireLogo).toHaveClass('invisible');
    expect(gqLogo).toHaveClass('invisible');
    expect(mensHealthLogo).toHaveClass('invisible');

    window.scrollY = 1000;
    window.dispatchEvent(new Event('scroll'));

    expect(esquireLogo).toHaveClass('visible');
    expect(gqLogo).toHaveClass('visible');
    expect(mensHealthLogo).toHaveClass('visible');
  });
});

//Footer

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('displays correct contact information', () => {
    const { getByText, getByAltText } = render(<Footer />);
    const emailLink = getByText('help@steelandstubble.com');
    const phoneNumber = getByText('(800) 555-1212');
    const logo = getByAltText('Steel & Stubble Logo');

    expect(emailLink).toHaveAttribute('href', 'mailto:help@steelandstubble.com');
    expect(phoneNumber).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it('displays social media icons with correct links', () => {
    const { getByTitle } = render(<Footer />);
    const facebookLink = getByTitle('Facebook');
    const twitterLink = getByTitle('Twitter');
    const instagramLink = getByTitle('Instagram');

    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com');
  });

  it('displays correct copyright information', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText('© 2024 Steel & Stubble. All Rights Reserved.');

    expect(copyrightText).toBeInTheDocument();
  });
});

//Header

jest.mock('../../context/CartContext', () => ({
  CartContext: {
    Consumer: (props) => props.children({ cartItems: [] }),
  },
}));

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('displays logo and text correctly', () => {
    const { getByAltText, getByText } = render(<Header />);
    const logo = getByAltText('Logo');
    const logoText = getByText('Steel & Stubble');

    expect(logo).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });

  it('displays cart badge with correct number of items', () => {
    const { getByText } = render(<Header />);
    const cartBadge = getByText('0');

    expect(cartBadge).toBeInTheDocument();
  });

  it('hides cart badge when there are no items in the cart', () => {
    const { container } = render(<Header />);
    const cartBadge = container.querySelector('.cartBadge');

    expect(cartBadge).toHaveStyle({ display: 'none' });
  });
});

//Hero Slider

jest.useFakeTimers();

describe('HeroSlider Component', () => {
  it('renders without crashing', () => {
    render(<HeroSlider />);
  });

  it('displays slides with correct images', () => {
    const { getAllByTestId } = render(<HeroSlider />);
    const slides = getAllByTestId('slide');

    expect(slides).toHaveLength(4);
  });

  it('slides images automatically at an interval', async () => {
    const { getByTestId } = render(<HeroSlider />);
    const slider = getByTestId('slider');

    expect(slider).toHaveStyle({ transform: 'translateX(0%)' });

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(slider).toHaveStyle({ transform: 'translateX(-100%)' });
    });
  });

  it('resets slide interval when component unmounts', async () => {
    const { unmount, getByTestId } = render(<HeroSlider />);
    const slider = getByTestId('slider');

    unmount();

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(slider).toHaveStyle({ transform: 'translateX(0%)' });
    });
  });
});

//Product Details

jest.mock('../../context/CartContext', () => ({
  CartContext: {
    Consumer: (props) => props.children({ addToCart: jest.fn() }),
  },
}));

const mockProduct = {
  name: 'Sample Product',
  price: 10.99,
  description: 'Sample Description',
};

describe('ProductDetails Component', () => {
  it('renders without crashing', () => {
    render(<ProductDetails product={mockProduct} />);
  });

  it('displays product details correctly', () => {
    const { getByText } = render(<ProductDetails product={mockProduct} />);
    const productName = getByText('Sample Product');
    const productPrice = getByText('$10.99 CAD');
    const productDescription = getByText('Sample Description');

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });

  it('calls addToCart function when "Order Now" button is clicked', () => {
    const addToCartMock = jest.fn();
    const { getByText } = render(
      <ProductDetails product={mockProduct} onOpenCart={jest.fn()} onClose={jest.fn()} isSlidingOut={false} />
    );

    const orderNowButton = getByText('Order Now');
    fireEvent.click(orderNowButton);

    expect(addToCartMock).toHaveBeenCalledWith(mockProduct);
  });
});

//Product List - A few issues with this one

describe('ProductList Component', () => {
  it('renders without crashing', () => {
    render(<ProductList onProductSelect={jest.fn()} />);
  });

  it('displays list of products correctly', () => {
    const { getByText } = render(<ProductList onProductSelect={jest.fn()} />);
    const product1Name = getByText('Product 1');
    const product1Price = getByText('$ 10.99 CAD');
    const product2Name = getByText('Product 2');
    const product2Price = getByText('$ 20.99 CAD');

    expect(product1Name).toBeInTheDocument();
    expect(product1Price).toBeInTheDocument();
    expect(product2Name).toBeInTheDocument();
    expect(product2Price).toBeInTheDocument();
  });

  it('calls onProductSelect function with the selected product when "SELECT" button is clicked', () => {
    const onProductSelectMock = jest.fn();
    const { getByText } = render(<ProductList onProductSelect={onProductSelectMock} />);

    const selectButton = getByText('SELECT');
    fireEvent.click(selectButton);

    expect(onProductSelectMock).toHaveBeenCalledTimes(1);
    expect(onProductSelectMock).toHaveBeenCalledWith({ id: 1, name: 'Product 1', price: 10.99 });
  });
});

//Quality Assurance

describe('QualityAssurance Component', () => {
  it('renders without crashing', () => {
    render(<QualityAssurance />);
  });

  it('displays the logo correctly', () => {
    const { getByAltText } = render(<QualityAssurance />);
    const logo = getByAltText('Steel & Stubble Logo');

    expect(logo).toBeInTheDocument();
  });

  it('displays the quality assurance text correctly', () => {
    const { getByText } = render(<QualityAssurance />);
    const header = getByText('Steel & Stubble Quality Guarantee');
    const text = getByText(/Experience the Steel & Stubble Difference/);

    expect(header).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});

//Shopping Cart

const mockCartItems = [
  { id: 1, name: 'Shave Gel', price: 9.99, quantity: 2 },
  { id: 2, name: 'Post-Shave Balm', price: 12.99, quantity: 1 },
];

const mockCartContextValue = {
  cartItems: mockCartItems,
  incrementQuantity: jest.fn(),
  decrementQuantity: jest.fn(),
  removeFromCart: jest.fn(),
};

describe('ShoppingCart Component', () => {
  it('renders without crashing', () => {
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <ShoppingCart onClose={jest.fn()} />
      </CartContext.Provider>
    );
  });

  it('displays correct subtotal and estimated total', () => {
    const { getByText } = render(
      <CartContext.Provider value={mockCartContextValue}>
        <ShoppingCart onClose={jest.fn()} />
      </CartContext.Provider>
    );

    const subtotal = getByText('Subtotal: $32.97');
    const estimatedTotal = getByText('Estimated Total: $32.97');

    expect(subtotal).toBeInTheDocument();
    expect(estimatedTotal).toBeInTheDocument();
  });

  it('calls incrementQuantity function when "+" button is clicked', () => {
    const { getAllByTestId } = render(
      <CartContext.Provider value={mockCartContextValue}>
        <ShoppingCart onClose={jest.fn()} />
      </CartContext.Provider>
    );

    const incrementButtons = getAllByTestId('incrementButton');
    fireEvent.click(incrementButtons[0]);

    expect(mockCartContextValue.incrementQuantity).toHaveBeenCalledWith(1);
  });

  it('calls decrementQuantity function when "-" button is clicked', () => {
    const { getAllByTestId } = render(
      <CartContext.Provider value={mockCartContextValue}>
        <ShoppingCart onClose={jest.fn()} />
      </CartContext.Provider>
    );

    const decrementButtons = getAllByTestId('decrementButton');
    fireEvent.click(decrementButtons[0]);

    expect(mockCartContextValue.decrementQuantity).toHaveBeenCalledWith(1);
  });

  it('calls removeFromCart function when remove item button is clicked', () => {
    const { getAllByTestId } = render(
      <CartContext.Provider value={mockCartContextValue}>
        <ShoppingCart onClose={jest.fn()} />
      </CartContext.Provider>
    );

    const removeButtons = getAllByTestId('removeItemButton');
    fireEvent.click(removeButtons[0]);

    expect(mockCartContextValue.removeFromCart).toHaveBeenCalledWith(1);
  });
});

//there are a few errors left, but I think I've done what I could. Watch the errors be something REALLY
//stupid, like a missing semicolon on line 78, or an extra bracket on line 34