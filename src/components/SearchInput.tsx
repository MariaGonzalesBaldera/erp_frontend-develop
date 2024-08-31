import { SearchSharp } from "@mui/icons-material";
import { Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchInput: React.FC = () => {
  return (
     <Grid className="p-2" item xs={12} sm={6} md={3} lg={2}>
      <TextField
        variant="outlined"
        size="small"
        sx={{ backgroundColor: "#f4f5f9", width:"20rem" }}
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
  );
};

export default SearchInput;
