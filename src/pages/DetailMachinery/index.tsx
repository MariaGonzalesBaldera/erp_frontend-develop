import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";
import React from "react";
import themeNew from "../../utils/theme";
import TabDocuments from "../../components/TabDocuments";
import CardItemDetail from "../../components/CardItemDetail";

function DetailMachinery() {
  const location = useLocation();
  const maquina = location.state;

  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ maxWidth: "10rem", minWidth: "26rem", marginBottom: ".8rem" }}
      >
        <Link
          fontSize={"12px"}
          color={themeNew.palette.menu.main}
          href="/lista-maquinarias"
          underline="hover"
        >
          LISTADO MAQUINARIA
        </Link>
        <Typography variant="button" color="text.primary">
          Detalle maquinaria
        </Typography>
      </Breadcrumbs>
      <Box
        sx={{
          borderRadius:2,
          backgroundColor: "#ffffff",
          // borderBottom: "2px #aaa5fc solid",
          // borderRight: "2px #aaa5fc solid",
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto p-3 border"
      >
        <CardItemDetail title="Marca" value={maquina.brand} />
        <CardItemDetail title="Modelo" value={maquina.model} />
        <CardItemDetail title="Año de Modelo" value={maquina.modelYear} />
        <CardItemDetail
          title="Fecha compra"
          value={maquina.acquisitionDate}
        />
        <CardItemDetail title="Carga Neta" value={maquina.netLoad} />
        <CardItemDetail title="Tipo Combustible" value={maquina.fuelType} />
        <CardItemDetail
          title="FECHA CREACIÓN"
          value={maquina.createdAt.slice(0, -9)}
        />
      </Box>
      <Grid className="mt-4">
        <TabDocuments />
      </Grid>
    </>
  );
}

export default DetailMachinery;
