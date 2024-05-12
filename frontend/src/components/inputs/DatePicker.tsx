import { useCallback, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./DatePicker.module.css";

type Props = {
  initialDate?: Date;
  onDateSelect: (date: Date) => void;
};

const DatePicker = ({ initialDate, onDateSelect }: Props) => {
  const [date, setDate] = useState<Date | undefined>(initialDate);

  const handleDateChange = useCallback((date: Date) => {
    setDate(date);
  }, []);

  const onBlur = useCallback(() => {
    if (!date) return;
    onDateSelect(date);
  }, [date, onDateSelect]);

  return (
    <ReactDatePicker
      wrapperClassName={classes.datePicker}
      showIcon
      selected={date}
      onChange={handleDateChange}
      onSelect={onDateSelect}
      onBlur={onBlur}
    />
  );
};

export default DatePicker;
