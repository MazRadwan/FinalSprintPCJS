const products = [

  {
    id: 1,
    name: "Shave Gel",
    description:
      "Embrace a shaving experience that is as smooth as silk with our Elite Comfort Shave Gel. Specially formulated with natural ingredients, it creates a rich, cushioning layer of protection between the blade and your skin. Aloe vera and hydrating essential oils work in harmony to soothe and moisturize, reducing irritation and leaving your skin feeling soft and refreshed. Our transparent gel ensures precise application, allowing you to sculpt your facial hair with accuracy and care. Suitable for all skin types and designed to pair perfectly with our Precision Master Shaver, this shave gel transforms a daily chore into a luxurious ritual for the modern gentleman.",
    price: 10.99,
  },
  {
    id: 2,
    name: "Post-Shave Balm",
    description:
      "Discover the soothing embrace of our Restorative Post-Shave Balm, designed to calm and revitalize your skin after each shave. This lightweight, non-greasy balm is infused with natural ingredients like witch hazel and chamomile to reduce inflammation and redness. The nourishing blend of vitamin E and essential oils hydrates and repairs the skin, promoting healing from any irritation or micro-cuts. Its quick absorption leaves your skin feeling comfortable and smooth, with a subtle, masculine scent that lingers. Ideal for all skin types, our Post-Shave Balm is the perfect finish to your grooming ritual, ensuring your skin remains as cared for as it is clean-cut.",
    price: 27.99,
  },
  {
    id: 3,
    name: "Premium Shaver  ",
    description:
      "The Steel and Stubble Premium Shaver is the epitome of engineering and design for an impeccable shaving experience. Forged with premium-grade stainless steel, the blades offer a sharp, enduring edge for a close and comfortable shave. The ergonomically designed handle, accented with a non-slip rubber grip, ensures maximum control and maneuverability. Each shaver comes equipped with a flexible head that glides effortlessly across the contours of your face, minimizing nicks and cuts. ",
    price: 19.99,
  },
  {
    id: 4,
    name: "Shave Cream",
    description:
      "Experience the luxury of our Ultra-Rich Shave Cream, a premium blend that promises the smoothest shave and unparalleled skin protection. Our unique formula combines the hydrating power of glycerin with the soothing properties of natural extracts, such as aloe vera and almond oil, to create a protective barrier that allows the razor to glide effortlessly across your skin. This rich cream works into a creamy lather, softening your facial hair and making it easier to shave closely without irritation. The result is a visibly smooth finish and skin that feels deeply moisturized and refreshed. Perfect for those who prefer a traditional wet shave, our Ultra-Rich Shave Cream elevates your shaving routine to an indulgent ritual, leaving your skin feeling pampered and impeccably smooth.",
    price: 9.99,
  },

];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
