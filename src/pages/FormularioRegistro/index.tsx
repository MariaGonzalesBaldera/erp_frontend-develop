import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';
import themeNew from '../../utils/theme';

const FormularioRegistro: React.FC = () => {
  const [fechaAdquisicion, setFechaAdquisicion] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFechaAdquisicion(event.target.valueAsDate);
  };

  return (
    <Box className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">Formulario de Registro</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Marca"
            variant="outlined"
            className="mb-4"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Modelo"
            variant="outlined"
            className="mb-4"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Año Modelo"
            variant="outlined"
            className="mb-4"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          size='medium'
            fullWidth
            type="date"
            label="Fecha de Adquisición"
            InputLabelProps={{ shrink: true }}
            onChange={handleDateChange}
            variant="outlined"
            className="mb-4"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Carga Neta"
            variant="outlined"
            className="mb-4"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Tipo Combustible"
            variant="outlined"
            className="mb-4"
          >
            <MenuItem value="Petroleo">Petroleo</MenuItem>
            <MenuItem value="Gasolina">Gasolina</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Gas">Gas</MenuItem>
            <MenuItem value="Electrico">Electrico</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Button variant="outlined"  sx={{}} fullWidth>
        Crear Registro
      </Button>
    </Box>
  );
};

export default FormularioRegistro;
