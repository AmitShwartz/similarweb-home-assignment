import { observer } from "mobx-react";
import useCategoriesGraph from "../../../hooks/UI/categories/useCategoriesGraph";
import Graph from "../../graph/Graph";
import CategoriesOptions from "./CategoriesOptions";
import { Heading } from "@chakra-ui/react";

const CategoriesGraph = () => {
  const { options, categoriesNames } = useCategoriesGraph();

  return categoriesNames.length ? (
    <div>
      <Heading
        marginTop={10}
        marginBottom={"10px"}
        as="h2"
        size="lg"
        color={"gray.700"}
      >
        Categories Trends Graph
      </Heading>
      <CategoriesOptions categoriesNames={categoriesNames} />
      <Graph options={options} />
    </div>
  ) : null;
};

export default observer(CategoriesGraph);
