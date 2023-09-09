import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
      },
    ],
  },
  reducers: {
    changeColor: (state, action) => {
      state.products += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColor } = productSlice.actions;

export default productSlice.reducer;
