import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        name: "Basic Tee",
        price: "$35",
        rating: 3.9,
        reviewCount: 512,
        href: "#",
        breadcrumbs: [
          { id: 1, name: "Women", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        images: [
          {
            id: 1,
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            imageAlt: "Back of women's Basic Tee in black.",
            primary: true,
          },
          {
            id: 2,
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
            imageAlt: "Side profile of women's Basic Tee in black.",
            primary: false,
          },
          {
            id: 3,
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
            imageAlt: "Front of women's Basic Tee in black.",
            primary: false,
          },
        ],
        colors: [
          {
            name: "Black",
            bgColor: "bg-gray-900",
            selectedColor: "ring-gray-900",
          },
          {
            name: "Heather Grey",
            bgColor: "bg-gray-400",
            selectedColor: "ring-gray-400",
          },
        ],
        sizes: [
          { name: "XXS", inStock: true },
          { name: "XS", inStock: true },
          { name: "S", inStock: true },
          { name: "M", inStock: true },
          { name: "L", inStock: true },
          { name: "XL", inStock: false },
        ],
        description: `
          <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
          <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
        `,
        details: [
          "Only the best materials",
          "Ethically and locally made",
          "Pre-washed and pre-shrunk",
          "Machine wash cold with similar colors",
        ],
      },
    ],
    selectedColor: 0,
    selectedSize: 0,
  },
  reducers: {
    changeColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    changeSize: (state, action) => {
      state.selectedSize = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColor, changeSize } = productSlice.actions;

export default productSlice.reducer;
