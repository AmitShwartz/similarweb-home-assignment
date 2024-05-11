import { omit } from "lodash";
import { useCallback, useMemo } from "react";
import useCategoriesStore from "../../stores/useCategoriesStore";

type Props = {
  categoryName: string;
};

const useCategoryOption = ({ categoryName }: Props) => {
  const {
    selectedCategoriesGraphOptions,
    setSelectedCategoriesGraphOptions,
    isMaxGraphOptionsSelected,
  } = useCategoriesStore();

  const isSelected = useMemo(
    () => selectedCategoriesGraphOptions[categoryName],
    [categoryName, selectedCategoriesGraphOptions]
  );

  const onClick = useCallback(() => {
    if (isSelected) {
      return setSelectedCategoriesGraphOptions(
        omit(selectedCategoriesGraphOptions, categoryName)
      );
    }
    if (isMaxGraphOptionsSelected) return;

    setSelectedCategoriesGraphOptions({
      ...selectedCategoriesGraphOptions,
      [categoryName]: categoryName,
    });
  }, [
    isMaxGraphOptionsSelected,
    isSelected,
    selectedCategoriesGraphOptions,
    setSelectedCategoriesGraphOptions,
    categoryName,
  ]);

  return {
    isSelected,
    onClick,
  };
};

export default useCategoryOption;
