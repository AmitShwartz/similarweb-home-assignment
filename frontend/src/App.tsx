import { ChakraProvider, Container } from "@chakra-ui/react";
import "./App.css";
import Table from "./components/table/Table";
import { categoriesTableColumns } from "./config/table/categoriesTable.config";
import { mocData } from "./data";
import { Category } from "./types/category.types";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" centerContent paddingY={4} paddingX={0}>
        <Table<Category>
          columns={categoriesTableColumns}
          data={mocData}
          caption="Categories Table"
        />
      </Container>
    </ChakraProvider>
  );
}

export default App;
