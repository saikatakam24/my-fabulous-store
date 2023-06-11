import { ReactNode, createContext, useState, useContext } from 'react';
import { ICategoryContext } from "./category-context.interface";
import { useFetch } from '../../hooks/useFetch';
import { categoriesUrl } from '../../shared/urls/url';
import { Category } from '../../shared/models/category.inyterface';

const CategoryContext = createContext<ICategoryContext>({
    categories: [],
    selectedCategory: '',
});

export const CategoryProvider = ({ children }: {children: ReactNode}) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('');
    const { response: categories } = useFetch(categoriesUrl(), null, []);

    const values = {
        categories: categories || [],
        selectedCategory,
        setSelectedCategory
    };

    return (
        <CategoryContext.Provider value={values}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => useContext(CategoryContext);
