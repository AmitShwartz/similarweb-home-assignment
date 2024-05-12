import { Flex, Text } from "@chakra-ui/react";
import CategoryOption from "./CategoryOption";

type Props = {
  categoriesNames: string[];
};

const CategoriesOptions = ({ categoriesNames }: Props) => {
  return categoriesNames.length ? (
    <>
      <Text fontSize="lg" marginBottom={4}>
        Select categories to display on the graph:
      </Text>
      <Flex marginBottom={4}>
        {categoriesNames.map((categoryName) => (
          <CategoryOption key={categoryName} categoryName={categoryName} />
        ))}
      </Flex>
    </>
  ) : null;
};

export default CategoriesOptions;
