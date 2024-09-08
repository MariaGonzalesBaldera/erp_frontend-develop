import { SearchSharp } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import themeNew from "../../utils/theme";

const ButtonIconSearch: React.FC = () => {
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
      />
    </Box>
  </Grid>
  );
};

export default ButtonIconSearch;
