import {
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Divider,
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
            sx={{ maxWidth: "10rem", minWidth: "20rem", marginBottom: ".8rem" }}
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
            item
            xs={6}
            sm={12}
            md={8}
            sx={{
              width: "44rem",
              minHeight: "15rem",
              border: "1px #a6b4fb solid",
              borderRadius: "0 2rem 2rem 0",
            }}
            className="shadow-lg"
          >
            <Grid sx={{ width: "100%", padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Detalles de la Maquinaria
              </Typography>
              <Grid container spacing={2} className="pt-2">
                {/* Primera columna de etiquetas y valores */}
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="button">Marca:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ alignContent:"center"}}>
                      <Typography variant="body1">{maquina.brand}</Typography>
                    </Grid>                    
                    <Grid item xs={6}>
                      <Typography variant="button">Modelo:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ alignContent:"center"}}>
                      <Typography variant="body1">{maquina.model}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="button">Año de Modelo:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ alignContent:"center"}}>
                      <Typography variant="body1">
                        {maquina.modelYear}
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="button">
                        Fecha de Adquisición:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ alignContent:"center"}}>
                      <Typography variant="body1">
                        {maquina.acquisitionDate}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Segunda columna de etiquetas y valores */}
                <Grid item xs={12} sm={6} sx={{borderLeft:".1em grey solid"}}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="button">Carga Neta:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ alignContent:"center"}}>
                      <Typography variant="body1">{maquina.netLoad}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="button">
                        Tipo de Combustible:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ alignContent:"center"}}>
                      <Typography variant="body1">
                        {maquina.fuelType}
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="button">Creado el:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ alignContent:"center"}}>
                      <Typography variant="body1">
                        {maquina.createdAt}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Botones */}
                {/* <Grid
                  justifyContent="center"
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
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DetalleMaquinaria;
