import { observer } from "mobx-react";
import useCategoriesGraph from "../../../hooks/UI/categories/useCategoriesGraph";
import Graph from "../../graph/Graph";
import CategoriesOptions from "./CategoriesOptions";

const CategoriesGraph = () => {
  const { options, categoriesNames } = useCategoriesGraph();

  return categoriesNames.length ? (
    <div>
      <CategoriesOptions categoriesNames={categoriesNames} />
      <Graph options={options} />
    </div>
  ) : null;
};

export default observer(CategoriesGraph);
