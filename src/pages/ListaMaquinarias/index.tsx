import React, { useState } from "react";

import BasicCard from "../../components/BasicCard";
import Box from "@mui/material/Box";
import {
  Autocomplete,
  Button,
  Checkbox,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";

const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "70%",
    md: "50%",
    lg: "40%",
  },
  maxWidth: "800px",
  height: "440px",
  bgcolor: "background.paper",
  boxShadow: 24,
};
interface FakeData {
  id: number;
  brand: string;
  model: string;
  modelYear: string;
  acquisitionDate: string;
  netLoad: string;
  fuelType: string;
  createdAt: string;
  updatedAt: string;
}
const handleChange = (e) => {
  console.log("first")
};
const handleSubmit = (e) => {
  e.preventDefault();
};
const currencies = [
  {
    value: "gas",
    label: "gas",
  },
  {
    value: "Biodiésel",
    label: "Biodiésel",
  },
  {
    value: "Petroleo",
    label: "Petroleo",
  },
];

const ListaMaquinarias: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const FakeDatas: FakeData[] = [
    {
      id: 1,
      brand: "Volvo",
      model: "Retroexcavadora",
      modelYear: "2024",
      acquisitionDate: "2024-04-20",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 2,
      brand: "Volvo",
      model: "Volquete",
      modelYear: "2024",
      acquisitionDate: "2024-04-21",
      netLoad: "10Tn",
      fuelType: "Biodiésel",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 3,
      brand: "Volvo",
      model: "Oruga",
      modelYear: "2024",
      acquisitionDate: "2024-04-22",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 4,
      brand: "Volvo",
      model: "Retroexcavadora",
      modelYear: "2024",
      acquisitionDate: "2024-04-23",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 5,
      brand: "Volvo",
      model: "Volquete",
      modelYear: "2024",
      acquisitionDate: "2024-04-24",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 6,
      brand: "Volvo",
      model: "Oruga",
      modelYear: "2024",
      acquisitionDate: "2024-04-25",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 7,
      brand: "Volvo",
      model: "Retroexcavadora",
      modelYear: "2024",
      acquisitionDate: "2024-04-26",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 8,
      brand: "Volvo",
      model: "Oruga",
      modelYear: "2024",
      acquisitionDate: "2024-04-27",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 9,
      brand: "Volvo",
      model: "Oruga",
      modelYear: "2024",
      acquisitionDate: "2024-04-28",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 10,
      brand: "Volvo",
      model: "Volquete",
      modelYear: "2024",
      acquisitionDate: "2024-04-29",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 11,
      brand: "Volvo",
      model: "Oruga",
      modelYear: "2024",
      acquisitionDate: "2024-04-30",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 12,
      brand: "Volvo",
      model: "Retroexcavadora",
      modelYear: "2024",
      acquisitionDate: "2024-05-01",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 13,
      brand: "Volvo",
      model: "Volquete",
      modelYear: "2024",
      acquisitionDate: "2024-05-02",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 14,
      brand: "Volvo",
      model: "Retroexcavadora",
      modelYear: "2024",
      acquisitionDate: "2024-05-03",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 15,
      brand: "Volvo",
      model: "Volquete",
      modelYear: "2024",
      acquisitionDate: "2024-05-04",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 16,
      brand: "Volvo",
      model: "Retroexcavadora",
      modelYear: "2024",
      acquisitionDate: "2024-05-05",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
    {
      id: 17,
      brand: "Volvo",
      model: "Volquete",
      modelYear: "2024",
      acquisitionDate: "2024-05-06",
      netLoad: "10Tn",
      fuelType: "Petroleo",
      createdAt: "06-06-2024 19:11:08",
      updatedAt: "06-06-2024 19:11:08",
    },
  ];
  const filteredData = selectedBrands.length
    ? FakeDatas.filter((unit) => selectedBrands.includes(unit.model))
    : FakeDatas;

  return (
    <>
      <Grid container className="pb-4" alignItems="center">
        <Grid item xs={12} sm={4} md={3}>
          <Box>
            <Typography variant="button">Lista de maquinarias</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Autocomplete
            multiple
            size="small"
            id="checkboxes-tags-demo"
            options={OptionFilterCheckbox}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              );
            }}
            style={{ minWidth: "50%", maxWidth: "40%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Modelo"
                sx={{
                  // para darle color primario a los bordes
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: themeNew.palette.primary.main,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: themeNew.palette.primary.main,
                  },
                }}
              />
            )}
            onChange={(event, newValue) => {
              console.log(newValue);
              setSelectedBrands(newValue.map((option) => option.title));
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Button
          onClick={handleOpenNewModal}
            sx={{
              backgroundColor: themeNew.palette.primary.main,
              "&:hover": {
                backgroundColor: "white",
                color: themeNew.palette.primary.main,
                border: `1px ${themeNew.palette.primary.main} solid`,
              },
            }}
            type="submit"
            variant="contained"
          >
            NUEVA MAQUINARIA
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="start">
        {filteredData.map((unit) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={unit.id}>
            <BasicCard
              id={unit.id}
              brand={unit.brand}
              model={unit.model}
              modelYear={unit.modelYear}
              acquisitionDate={unit.acquisitionDate}
              netLoad={unit.netLoad}
              fuelType={unit.fuelType}
              createdAt={unit.createdAt}
              updatedAt={unit.updatedAt}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={openModalNew}
        onClose={handleCloseNewModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Box
            sx={{
              width: "100%",
              textAlign: "end",
              height: "2.5rem",
              backgroundColor: themeNew.palette.primary.main,
            }}
          >
            <IconButton
              sx={{ color: "white" }}
              onClick={handleCloseNewModal}
            >
              <Close />
            </IconButton>
          </Box>
          <Box className="p-5">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Actualizar Datos de la Maquinaria
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Marca"
                    variant="outlined"
                    fullWidth
                    name="brand"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Modelo"
                    variant="outlined"
                    fullWidth
                    name="model"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Año de Modelo"
                    variant="outlined"
                    fullWidth
                    name="modelYear"
                    type="number"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Adquisición"
                    variant="outlined"
                    fullWidth
                    name="acquisitionDate"
                    type="date"
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Carga Neta"
                    variant="outlined"
                    fullWidth
                    name="netLoad"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-select-currency"
                    label="Tipo de Combustible"
                    select
                    variant="outlined"
                    fullWidth
                    name="fuelType"
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                
                <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                  <Button
                    sx={{
                      backgroundColor: themeNew.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "white",
                        color: themeNew.palette.primary.main,
                        border: `1px ${themeNew.palette.primary.main} solid`,
                      },
                    }}
                    type="submit"
                    variant="contained"
                  >
                    GUARDAR
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default ListaMaquinarias;
const OptionFilterCheckbox = [
  { title: "Oruga" },
  { title: "Retroexcavadora" },
  { title: "Volquete" },
];
