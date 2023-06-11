import { useProduct } from "../../../context/product-context/product-context";
import { ProductComparision } from "./product-camparision"
import { ProductTable } from "./product-table"

export const ProductComparisionLayout = () => {
    const {products} = useProduct();

    return <>
        { 
            products && products.length ? (
                <>
                    <ProductComparision />
                    <ProductTable />
                </>
            ) : (
                <div><p>Please select category</p></div>
            )
        }
        
    </>
}