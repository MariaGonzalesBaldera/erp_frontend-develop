import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import React from "react";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface TimePickerFormProps {
  timeValue: string; //dayjs(formData.driving_end, "h:mm A")
  nameValue: string; //"driving_end"
  label: string; //"Fin de conduccion"
}

const TimePickerForm: React.FC<TimePickerFormProps> = ({
  timeValue,
  nameValue,
  label,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker //onChange={handleChange}
          name={nameValue}
          label={label}
          value={dayjs(timeValue, "h:mm A")}
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
