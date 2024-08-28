import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import React from "react";

interface DatePickerFormProps {
  dateValue: string;
  labelValue: string;
  handleDateChange: (date: any) => void;
  nameValue: string;
  error: boolean;
  helperText: string;
}

const DatePickerForm: React.FC<DatePickerFormProps> = ({
  dateValue,
  labelValue,
  handleDateChange,
  nameValue,
  error,
  helperText,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        name={nameValue}
        value={dateValue ? dayjs(dateValue, "YYYY-MM-DD") : null}
        label={labelValue}
        onChange={handleDateChange}
        format="DD-MM-YYYY"
        slotProps={{ textField: { error, helperText } }} // Pasar el error y helperText al TextField
      />
    </LocalizationProvider>
  );
};

export default DatePickerForm;
