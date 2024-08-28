import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import ButtonDefault from "../ButtonDefault";
import { HeaderPageProps } from "../../types";
import { SearchSharp } from "@mui/icons-material";

const HeaderPage: React.FC<HeaderPageProps> = ({ title, titleButton, handleOpen,mode }) => {
  return (
    <Grid container className="pb-2" alignItems="center">
      <Grid item xs={10} sm={10} md={9.8}>
        <Typography variant="button">{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <ButtonDefault onClick={handleOpen} title={titleButton} />
      </Grid>
      {/* Campo de Búsqueda */}
      {mode !== "maquinaria" && (
        <Grid item xs={12} sm={6} md={3} lg={5}>
          <TextField
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "#f4f5f9" }}
            placeholder="Ingresa el código de la maquinaria"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchSharp />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
      )}
    </Grid>
  );
};

export default HeaderPage;
