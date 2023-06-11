import { Outlet, useNavigate } from "react-router-dom";
import CustomSelect from "../../shared/components/ui/CustomSelect";
import { Box, Grid } from "@mui/material";
import { useProduct } from "../../context/product-context/product-context";
import { useCategory } from "../../context/category-context/category-context";

const Home = () => {
  const navigate = useNavigate();

  const { categories, selectedCategory, setSelectedCategory } = useCategory();
  const { products, selectProduct, setSelectProduct } = useProduct();

  /*
    Handler function for category option change
  */
  const handleCategoryChange = (e: any) => {
    setSelectedCategory && setSelectedCategory(e.target.value);
    setSelectProduct && setSelectProduct("");
    navigate("comparison");
  };

  /*
    Handler function for product option change
  */
  const handleProductChange = (e: any) => {
    setSelectProduct && setSelectProduct(e.target.value);
    navigate("product-details");
  };

  /*
    Handler function for category close btn
  */
  const categoryCloseClicked = () => {
    setSelectedCategory && setSelectedCategory("");
    setSelectProduct && setSelectProduct("");
    navigate("comparison");
  };

  /*
    Handler function for product close btn
  */
  const productCrossClicked = () => {
    setSelectProduct && setSelectProduct("");
    navigate("comparison");
  };

  const formattedData = categories!.map((category) => ({
    id: category,
    name: category,
  }));

  const formattedDataproduct = products.map(({ id, title }) => ({
    id: id.toString(),
    name: title,
  }));

  return (
    <Grid container spacing={2} sx={{ padding: "16px" }}>
      <Grid item xs={12} sm={12} md={4}>
        <Box sx={{ marginBottom: "16px" }}>
          <CustomSelect
            handleChange={handleCategoryChange}
            value={selectedCategory}
            options={formattedData}
            labelName="Category"
            isDisabled={false}
            onCrossClick={categoryCloseClicked}
          />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <CustomSelect
            handleChange={handleProductChange}
            value={selectProduct}
            isDisabled={formattedDataproduct.length === 0}
            options={formattedDataproduct}
            labelName="Products"
            onCrossClick={productCrossClicked}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
