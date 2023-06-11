const BASE_URL = 'https://fakestoreapi.com';

export const categoriesUrl = () => `${BASE_URL}/products/categories`;
export const productsByCategoryUrl = (category: string) => `${BASE_URL}/products/category/${category}`;
export const productDetailsUrl=(productId:string)=>`${BASE_URL}/products/${productId}`;