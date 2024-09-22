import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
<<<<<<< HEAD
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
=======
import React, { useState } from "react";

interface GroupRadioButtonProps {
  showTitle: boolean;
  selectedValue: string;
  onChange: (value: string) => void;
}

const GroupRadioButton: React.FC<GroupRadioButtonProps> = ({ showTitle,selectedValue, onChange }) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // Llama a la función proporcionada por el padre
  };
  
  return (
      <FormControl
        sx={{
          border: "1px #afbaca solid",
          backgroundColor: "#e2e0ff",
          paddingLeft: showTitle ? 1 : 1,
          paddingRight: showTitle ? 1 : 1,
          paddingTop: showTitle ? 1 : 0,
          paddingBottom: showTitle ? 1 : 0,
          borderRadius: 1.5,
          color: "#1e1b4b",
        }}
      >
        {showTitle && (
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
        )}
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selectedValue} // Conectar el estado con el valor del RadioGroup
          onChange={handleChange} // Manejar el cambio de selección
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
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
};

export default GroupRadioButton;
