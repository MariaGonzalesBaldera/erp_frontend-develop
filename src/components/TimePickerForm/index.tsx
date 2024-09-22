import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import React from "react";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface TimePickerFormProps {
  timeValue: string; //dayjs(formData.driving_end, "h:mm A")
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
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          name={nameValue}
          label={label}
          onChange={(newTime) => handleTimeChange(newTime, nameValue)} // Pasamos newTime y nameValue al handleTimeChange
          value={dayjs(timeValue, "HH:mm")} // Formato 24 horas o "h:mm A" para AM/PM
          slotProps={{
            textField: { error, helperText, size: "small", fullWidth: true },
          }}
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
