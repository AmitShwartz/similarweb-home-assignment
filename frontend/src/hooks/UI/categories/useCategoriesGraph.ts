import { SeriesOptionsType } from "highcharts";
import useCategoriesStore from "../../stores/useCategoriesStore";
import { useMemo } from "react";
import categoriesService from "../../../services/categories.service";
import { CategorySeriesOptions } from "../../../types/category.types";
import { isEmpty } from "lodash";

enum SeriesOptions {
  units_sold = "units_sold",
  revenue = "revenue",
  product_view = "product_view",
}

const seriesOptions: { [key in SeriesOptions]: string } = {
  units_sold: "Units Sold",
  revenue: "Revenue",
  product_view: "Product View",
};

const seriesOptionsEntries = Object.entries(seriesOptions);

const useCategoriesGraph = () => {
  const { categories, categoriesNames, selectedCategoriesGraphOptions } =
    useCategoriesStore();

  const series = useMemo<Array<SeriesOptionsType>>(() => {
    const series: Array<SeriesOptionsType> = [];

    if (isEmpty(selectedCategoriesGraphOptions)) return series;

    for (const category in selectedCategoriesGraphOptions) {
      seriesOptionsEntries.forEach(([key, value]) => {
        series.push({
          name: `${category} ${value}`,
          data: categoriesService.createGraphAggregation(
            categories[category],
            key as CategorySeriesOptions
          ),
          type: "line",
        });
      });
    }

    return series;
  }, [categories, selectedCategoriesGraphOptions]);

  // Highcharts configuration options
  const options: Highcharts.Options = {
    chart: {
      type: "line",
      width: 800,
    },
    title: {
      text: "Time-Series Trend Graph",
    },
    xAxis: {
      type: "category",
      title: {
        text: "Date",
      },
    },
    series,
    accessibility: {
      enabled: false,
    },
  };

  return {
    options,
    categoriesNames,
  };
};

export default useCategoriesGraph;
