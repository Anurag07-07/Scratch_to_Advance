import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (build) => ({
    // Get all products
    getAllProduct: build.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductQuery } = ProductApi;
