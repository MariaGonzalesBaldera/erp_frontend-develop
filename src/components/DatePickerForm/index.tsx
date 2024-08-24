import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import React from "react";

interface DatePickerFormProps {
  dateValue: string;
  labelValue: string;
  handleDateChange: (date: any) => void;
}

const DatePickerForm: React.FC<DatePickerFormProps> = ({
  dateValue,
  labelValue,
  handleDateChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={dayjs(dateValue)}
        label={labelValue}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};

export default DatePickerForm;
