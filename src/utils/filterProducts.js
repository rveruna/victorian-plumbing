export const filterProducts = (products, priceRange) => {
  let filtered = products;

  if (priceRange.min !== null && priceRange.max !== null) {
    const minPrice = Math.min(priceRange.min, priceRange.max);
    const maxPrice = Math.max(priceRange.min, priceRange.max);

    filtered = products.filter(
      (product) =>
        product.price.priceIncTax >= minPrice &&
        product.price.priceIncTax <= maxPrice
    );
  } else {
    // Handle the case when the price range is unchecked
    filtered = products;
  }

  return filtered;
};
