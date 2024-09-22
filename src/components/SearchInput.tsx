import { SearchSharp } from "@mui/icons-material";
import { Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";

interface SearchInputProps {
  title: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ title }) => {
  return (
    <Grid className="p-2" item xs={12} sm={6} md={3} lg={2}>
      <TextField
        variant="outlined"
        size="small"
        sx={{ backgroundColor: "#f4f5f9", width: "20rem" }}
        placeholder={title}
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
//"Ingresa el código de la maquinaria"