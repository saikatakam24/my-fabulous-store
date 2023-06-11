import { TableColumn } from "../../models/table.interface";

export const ProductTableColumns: TableColumn[] = [
  { name: "id", label: "ID" },
  { name: "title", label: "Title" },
  { name: "price", label: "Price" },
  { name: "category", label: "Category" },
  { name: "description", label: "Description" },
  { name: "rating", label: "Rating" },
];
