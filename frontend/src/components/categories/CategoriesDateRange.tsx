import { Flex, Text } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import useCategoriesStore from "../../hooks/stores/useCategoriesStore";
import {
  formatCategoryDateRequest,
  formatToDate,
} from "../../utils/format.utils";
import DatePicker from "../inputs/DatePicker";

const START = "start";
const END = "end";

const CategoriesDateRange = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useCategoriesStore();

  const onDateChange = useCallback(
    (date: Date, type: string) => {
      const formattedDate = formatCategoryDateRequest(date);
      type === START ? setStartDate(formattedDate) : setEndDate(formattedDate);
    },
    [setEndDate, setStartDate]
  );

  const { initialStartDate, initialEndDate } = useMemo(() => {
    const initialStartDate = startDate ? formatToDate(startDate) : undefined;
    const initialEndDate = endDate ? formatToDate(endDate) : undefined;
    return { initialStartDate, initialEndDate };
  }, [endDate, startDate]);

  return (
    <div>
      <Text> Pick Date Range:</Text>
      <Flex>
        <DatePicker
          initialDate={initialStartDate}
          onDateSelect={(date) => onDateChange(date, START)}
        />
        <DatePicker
          initialDate={initialEndDate}
          onDateSelect={(date) => onDateChange(date, END)}
        />
      </Flex>
    </div>
  );
};

export default CategoriesDateRange;
