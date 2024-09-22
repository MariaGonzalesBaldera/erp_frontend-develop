import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import React from "react";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface TimePickerFormProps {
  timeValue: string; //dayjs(formData.driving_end, "h:mm A")
<<<<<<< HEAD
<<<<<<< HEAD
  nameValue: string; //"driving_end"
  label: string; //"Fin de conduccion"
}

const TimePickerForm: React.FC<TimePickerFormProps> = ({
  timeValue,
  nameValue,
  label,
=======
=======
>>>>>>> feature/addAuthProcess
  nameValue: string;
  handleTimeChange: (date: any, nameValue: any) => void;
  label: string;
  error?: boolean;
  helperText?: string;
}
const TimePickerForm: React.FC<TimePickerFormProps> = ({
  timeValue,
  nameValue,
  handleTimeChange,
  label,
  error,
  helperText,
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
<<<<<<< HEAD
<<<<<<< HEAD
        <TimePicker //onChange={handleChange}
          name={nameValue}
          label={label}
          value={dayjs(timeValue, "h:mm A")}
=======
=======
>>>>>>> feature/addAuthProcess
        <TimePicker
          name={nameValue}
          label={label}
          onChange={(newTime) => handleTimeChange(newTime, nameValue)} // Pasamos newTime y nameValue al handleTimeChange
          value={dayjs(timeValue, "HH:mm")} // Formato 24 horas o "h:mm A" para AM/PM
          slotProps={{
            textField: { error, helperText, size: "small", fullWidth: true },
          }}
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default TimePickerForm;
