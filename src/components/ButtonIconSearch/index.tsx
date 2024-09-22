import { SearchSharp } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";
<<<<<<< HEAD
import React from "react";
import themeNew from "../../utils/theme";

const ButtonIconSearch: React.FC = () => {
=======
import React, { useState } from "react";
import themeNew from "../../utils/theme";
interface ButtonIconSearchProps {
  onClick?: () => void; // Define la propiedad onClick como opcional
}
const ButtonIconSearch: React.FC<ButtonIconSearchProps> = ({onClick}) => {

>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
  return (
    <Grid item xs={12}sm={12} >
    <Box  display="flex" justifyContent={"start"}>
      <TextField
        label="Ingrese codigo de maquinaria"
        name="unidad"
        onChange={() => console.log("first")}
        size="small"
        sx={{
            backgroundColor:"#f6f6fc",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey",
            },
          },
        }}
      />
      <SearchSharp
        sx={{
          border: `1px ${themeNew.palette.primary.main} solid`,
          width: 45,
          height: 40,
          padding: 0.8,
          cursor: "pointer",
          borderRadius: 1,
          marginLeft: 1, // Añade un margen a la izquierda del ícono
          "&:hover": {
            color: "#e2e0ff",
            backgroundColor: themeNew.palette.primary.main,
          },
        }}
<<<<<<< HEAD
=======
          onClick={onClick}
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
      />
    </Box>
  </Grid>
  );
};

export default ButtonIconSearch;
