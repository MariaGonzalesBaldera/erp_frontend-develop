import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import themeNew from "../../utils/theme";
import TabDocumentos from "../../components/TabDocumentos";
import CardItemDetail from "../../components/CardItemDetail";

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

  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ maxWidth: "10rem", minWidth: "20rem", marginBottom: ".8rem" }}
      >
        <Link
          fontSize={"14px"}
          color={themeNew.palette.menu.main}
          href="/lista-maquinarias"
          underline="hover"
        >
          Listado Maquinaria
        </Link>
        <Typography variant="button" color="text.primary">
          Detalle maquinaria
        </Typography>
      </Breadcrumbs>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto p-5">
        <CardItemDetail title="Marca del vehículo" value={maquina.brand} />
        <CardItemDetail title="Modelo del vehículo" value={maquina.model} />
        <CardItemDetail title="Año de Modelo" value={maquina.modelYear} />
        <CardItemDetail
          title="Fecha Adquisición"
          value={maquina.acquisitionDate}
        />
        <CardItemDetail title="Carga Neta" value={maquina.netLoad} />
        <CardItemDetail title="Tipo de Combustible" value={maquina.fuelType} />
        <CardItemDetail title="FECHA CREACIÓN" value={maquina.createdAt.slice(0, -9)} />
      </div>
      <Divider />
      <Grid className="mt-4">
        <TabDocumentos />
      </Grid>
    </>
  );
}

export default DetalleMaquinaria;
