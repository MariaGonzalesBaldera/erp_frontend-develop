import { SearchSharp } from "@mui/icons-material";
import { Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";

<<<<<<< HEAD
const SearchInput: React.FC = () => {
  return (
     <Grid className="p-2" item xs={12} sm={6} md={3} lg={2}>
      <TextField
        variant="outlined"
        size="small"
        sx={{ backgroundColor: "#f4f5f9", width:"20rem" }}
        placeholder="Ingresa el código de la maquinaria"
=======
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
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchSharp />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
<<<<<<< HEAD
     </Grid>
=======
    </Grid>
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
  );
};

export default SearchInput;
<<<<<<< HEAD
=======
//"Ingresa el código de la maquinaria"
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
