import { Box, Typography } from "@mui/material";
import "./product-details.css";
import { useProduct } from "../../context/product-context/product-context";

const productDetailsStyle = { flex: 1, textAlign: "center" };
const imgContainerStyle = { flex: 3, textAlign: "center" };
const contentContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
};

const ProductDetails = () => {
  const { productDetails: product } = useProduct();
  return (
    product && (
      <Box>
        <Typography variant="h4" marginBottom={2} fontWeight={"bold"}>
          Title: {product?.title}
        </Typography>
        <Box sx={contentContainerStyle}>
          <Box sx={productDetailsStyle}>
            <span className="category">{product.category}</span> :
            <span className="price"> ${product.price}</span>
          </Box>
          <Box sx={imgContainerStyle}>
            <img
              alt="productImage"
              src={product.image}
              className="product-image"
            />
          </Box>
        </Box>
        <Box>Description: {product?.description}</Box>
      </Box>
    )
  );
};

export default ProductDetails;
