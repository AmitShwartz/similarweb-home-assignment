import { Flex, Text } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import useCategoriesStore from "../../hooks/stores/useCategoriesStore";
import {
  formatCategoryDateRequest,
  formatToDate,
} from "../../utils/format.utils";
import DatePicker from "../inputs/DatePicker";

const CategoriesDateRange = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useCategoriesStore();

  const onDateChange = useCallback(
    (date: Date, type: string) => {
      const formattedDate = formatCategoryDateRequest(date);
      if (type === "start") {
        setStartDate(formattedDate);
      } else {
        setEndDate(formattedDate);
      }
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
          onDateSelect={(date) => onDateChange(date, "start")}
        />
        <DatePicker
          initialDate={initialEndDate}
          onDateSelect={(date) => onDateChange(date, "end")}
        />
      </Flex>
    </div>
  );
};

export default CategoriesDateRange;
