import { useProduct } from "../../../context/product-context/product-context";
import { TableUI } from "../../../shared/components/ui/table";
import { ProductTableColumns } from "../../../shared/defaults-data/table/product-table"

export const ProductTable = () => {
    const columns = ProductTableColumns;
    const {products} = useProduct();
    return <>
        <TableUI columns={columns} rows={products} />
    </>

}