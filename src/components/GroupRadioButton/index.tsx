import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const GroupRadioButton: React.FC = () => {
  return (
    <FormControl
      sx={{
        border:"1px #1e1b4b solid",
        backgroundColor: "#e2e0ff",
        padding: 1,
        borderRadius: 1.5,
        color: "#1e1b4b",
      }}
    >
      <FormLabel
        sx={{
          borderRadius: 1,
          backgroundColor: "#1e1b4b",
          textAlign: "center",
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        }}
        id="demo-row-radio-buttons-group-label"
      >
        Modelo
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="oruga"
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 23,
                },
              }}
            />
          }
          label="Oruga"
        />
        <FormControlLabel
          value="volquete"
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 23,
                },
              }}
            />
          }
          label="Volquete"
        />
        <FormControlLabel
          value="retroexcavadora"
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 23,
                },
              }}
            />
          }
          label="Retroexcavadora"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GroupRadioButton;
