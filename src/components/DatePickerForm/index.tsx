import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
<<<<<<< HEAD
<<<<<<< HEAD
import dayjs from "dayjs";
=======
import dayjs from 'dayjs';
import 'dayjs/locale/es';
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
import dayjs from 'dayjs';
import 'dayjs/locale/es';
>>>>>>> feature/addAuthProcess
import React from "react";

interface DatePickerFormProps {
  dateValue: string;
  labelValue: string;
  handleDateChange: (date: any) => void;
  nameValue: string;
  error?: boolean;
  helperText?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
dayjs.locale('es');
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
dayjs.locale('es');
>>>>>>> feature/addAuthProcess
const DatePickerForm: React.FC<DatePickerFormProps> = ({
  dateValue,
  labelValue,
  handleDateChange,
  nameValue,
  error,
  helperText,
}) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <LocalizationProvider dateAdapter={AdapterDayjs}>
=======
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
>>>>>>> feature/addAuthProcess
      <DatePicker 
        name={nameValue}
        value={dateValue ? dayjs(dateValue, "YYYY-MM-DD") : null}
        label={labelValue}
        onChange={handleDateChange}
        format="DD-MM-YYYY"
        slotProps={{ textField: { error, helperText,size: 'small',fullWidth:true } }} // Pasar el error y helperText al TextField
      />
    </LocalizationProvider>
  );
};

export default DatePickerForm;
