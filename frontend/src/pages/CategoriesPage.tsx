import { Container, Heading } from "@chakra-ui/react";
import CategoriesGraph from "../components/categories/graph/CategoriesGraph";
import CategoriesTable from "../components/categories/table/CategoriesTable";
import useCategoriesPage from "../hooks/UI/categories/useCategoriesPage";
import { observer } from "mobx-react";
import CategoriesDateRange from "../components/categories/CategoriesDateRange";

const CategoriesPage = () => {
  useCategoriesPage();
  return (
    <Container maxW="container.lg" centerContent paddingY={4} paddingX={0}>
      <Heading marginBottom={20}>SimilarWeb Categories Trends</Heading>
      <CategoriesDateRange />
      <CategoriesGraph />
      <CategoriesTable />
    </Container>
  );
};

export default observer(CategoriesPage);
