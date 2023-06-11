import { ReactNode, createContext, useState, useContext } from "react";
import { IProductContext } from "./product-context.interface";
import { useFetch } from "../../hooks/useFetch";
import {
  productDetailsUrl,
  productsByCategoryUrl,
} from "../../shared/urls/url";
import { Product } from "../../shared/models/product.interface";

const ProductContext = createContext<IProductContext>({
  products: [],
  selectProduct: "",
  productDetails: null,
});

export const ProductProvider = ({
  children,
  selectedCategory,
}: {
  children: ReactNode;
  selectedCategory: string;
}) => {
  const [selectProduct, setSelectProduct] = useState<string>("");

  const { response: productsRes } = useFetch(
    productsByCategoryUrl(selectedCategory),
    null,
    [selectedCategory]
  );
  const { response: productDetails } = useFetch(
    productDetailsUrl(selectProduct),
    null,
    [selectProduct]
  );

  const products = (
    !selectedCategory ? [] : (productsRes as Product[]) || []
  ).map((product, index) => ({
    ...product,
    rating: parseInt((Math.random() * 4 + 1).toFixed(0), 10),
  }));

  const values = {
    products,
    selectProduct,
    productDetails,
    setSelectProduct,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
