import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import CategoriesPage from "./pages/CategoriesPage";
import { StoreProvider } from "./stores/setupContext";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <CategoriesPage />
        </QueryClientProvider>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default App;
