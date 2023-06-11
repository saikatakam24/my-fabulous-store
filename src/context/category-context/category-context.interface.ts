import { Category } from "../../shared/models/category.inyterface"

export interface ICategoryContext {
    categories: Category[] | null,
    selectedCategory: Category
    setSelectedCategory?: Function
}