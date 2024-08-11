import {
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Link,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
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
  height: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
};

function DetalleMaquinaria() {
  const location = useLocation();
  const maquina = location.state;

  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
  const handleOpenUpdateModal = () => setOpenModalUpdate(true);
  const handleCloseUpdateModal = () => setOpenModalUpdate(false);

  const [formData, setFormData] = useState({
    brand: maquina.brand || "",
    model: maquina.model || "",
    modelYear: maquina.modelYear || "",
    acquisitionDate: maquina.acquisitionDate || "",
    netLoad: maquina.netLoad || "",
    fuelType: maquina.fuelType || "",
    createdAt: maquina.createdAt || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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

  return (
    <Grid container className="pb-4">
      <Grid item xs={12}>
        <Box>
          {/* <Typography variant="button">Detalle Maquinaria</Typography> */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ maxWidth: "10rem", minWidth: "20rem" }}
          >
            <Link
              color={themeNew.palette.primary.main}
              href="/lista-maquinarias"
            >
              Listado Maquinaria
            </Link>
            <Typography color="text.primary">Detalle maquinaria</Typography>
          </Breadcrumbs>

          <Grid
            container
            sx={{
              width: "44rem",
              minHeight: "23rem",
              border: "1px #a6b4fb solid",
              borderRadius: "0 2rem 2rem 0",
            }}
            className="shadow-lg mb-5 mt-5"
          >
            <Grid
              container
              sx={{
                maxWidth: "25%",
                minHeight: "23rem",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <CardMedia
                component="img"
                alt="Imagen maquinaria"
                image="https://cgmrental.com.pe/wp-content/uploads/2022/03/R4D062109_RRD.jpg"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
            <Grid
              sx={{
                width: "75%",
              }}
            >
              <Box sx={{ width: "28rem", padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Detalles de la Maquinaria
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Marca:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{maquina.brand}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Modelo:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{maquina.model}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Año de Modelo:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{maquina.modelYear}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      Fecha de Adquisición:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">
                      {maquina.acquisitionDate}
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Carga Neta:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{maquina.netLoad}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      Tipo de Combustible:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{maquina.fuelType}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Creado el:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{maquina.createdAt}</Typography>
                  </Grid>

                  {/* botones */}
                  <Grid
                    justifyContent={"center"}
                    className="mt-5"
                    container
                    gap={2}
                    minWidth={"10rem"}
                  >
                    <Button
                      onClick={handleOpenUpdateModal}
                      sx={{
                        border: `1px  ${themeNew.palette.primary.main} solid`,
                        color: themeNew.palette.primary.main,
                      }}
                      variant="outlined"
                    >
                      Actualizar
                    </Button>
                    <Button variant="outlined" color="error">
                      Eliminar
                    </Button>
                  </Grid>
                  <Modal
                    open={openModalUpdate}
                    onClose={handleCloseUpdateModal}
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
                          onClick={handleCloseUpdateModal}
                        >
                          <Close />
                        </IconButton>
                      </Box>
                      <Box className="p-5">
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Actualizar Datos de la Maquinaria
                        </Typography>
                        <Box
                          component="form"
                          onSubmit={handleSubmit}
                          sx={{ mt: 2 }}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Marca"
                                variant="outlined"
                                fullWidth
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Modelo"
                                variant="outlined"
                                fullWidth
                                name="model"
                                value={formData.model}
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
                                value={formData.modelYear}
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
                                value={formData.acquisitionDate}
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
                                value={formData.netLoad}
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
                                value={formData.fuelType}
                                onChange={handleChange}
                              >
                                {currencies.map((option) => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                label="Creado el"
                                variant="outlined"
                                fullWidth
                                name="createdAt"
                                value={formData.createdAt}
                                onChange={handleChange}
                                disabled // Este campo está deshabilitado porque usualmente no se actualiza
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sx={{ textAlign: "center", mt: 3 }}
                            >
                              <Button
                                sx={{
                                  backgroundColor:
                                    themeNew.palette.primary.main,
                                  "&:hover": {
                                    backgroundColor: "white",
                                    color: themeNew.palette.primary.main,
                                    border: `1px ${themeNew.palette.primary.main} solid`
                                  },
                                }}
                                type="submit"
                                variant="contained"
                              >
                                Actualizar
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Box>
                  </Modal>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DetalleMaquinaria;
