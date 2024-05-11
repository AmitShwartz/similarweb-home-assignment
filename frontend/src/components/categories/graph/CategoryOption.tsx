import { Button } from "@chakra-ui/react";
import useCategoryOption from "../../../hooks/UI/categories/useCategoryOption";
import { observer } from "mobx-react";

type Props = {
  categoryName: string;
};

const CategoryOption = ({ categoryName }: Props) => {
  const { isSelected, onClick } = useCategoryOption({ categoryName });
  return (
    <Button
      key={categoryName}
      onClick={onClick}
      colorScheme="teal"
      variant={isSelected ? "solid" : "outline"}
      marginRight={4}
    >
      {categoryName}
    </Button>
  );
};

export default observer(CategoryOption);
