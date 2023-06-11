import { useState, useEffect } from "react";
import * as HighCharts from "highcharts";
import { merge } from "lodash";
import { BAR_CHART_OPTIONS } from "../../../shared/defaults-data/charts/bar-chart-options";
import { Chart } from "../../../shared/components/charts/chart";
import CustomSelect from "../../../shared/components/ui/CustomSelect";
import { Box, Grid } from "@mui/material";
import { useProduct } from "../../../context/product-context/product-context";
import { useCategory } from "../../../context/category-context/category-context";

const defaultOptions: HighCharts.Options = {
  title: {
    text: "Products Comparison",
  },
  subtitle: {
    text: "This graph includes comparison of products with price and ratings",
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: "Total percent market share",
    },
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: "{point.y}",
      },
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
  },

  series: [
    {
      name: "Products",
      colorByPoint: true,
      type: "column",
    },
  ],
};

export const ProductComparision = () => {
  const [chartOptions, setChartOptions] = useState<HighCharts.Options | null>(
    null
  );
  const { products } = useProduct();
  const { selectedCategory } = useCategory();
  const [selectComparisionOption, setSelectComparisionOption] =
    useState("price");

  useEffect(() => {
    const data = (products || []).map(({ title, price, rating }) => ({
      name: title,
      y: selectComparisionOption === "price" ? price : rating,
    }));
    const options = merge({}, BAR_CHART_OPTIONS, defaultOptions, {
      series: [{ data }],
    });
    setChartOptions(options);
  }, [selectComparisionOption, selectedCategory, products]);

  /*
    Comparision option for drodown
  */
  const comparisionOptions = [
    { id: "price", name: "Price" },
    { id: "rating", name: "Rating" },
  ];

  return (
    <>
      {chartOptions && (
        <>
          <Chart options={chartOptions} />
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Box sx={{ marginBottom: "25px" }}>
                <CustomSelect
                  labelName="Comparison"
                  options={comparisionOptions}
                  value={selectComparisionOption}
                  handleChange={(e) =>
                    setSelectComparisionOption(e.target.value)
                  }
                  isDisabled={false}
                  showCross={false}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
