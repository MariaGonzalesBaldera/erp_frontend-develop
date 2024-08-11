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
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import themeNew from "../../utils/theme";
import { Close } from "@mui/icons-material";
import ModalFormulario from "../../components/ModalFormulario";
import ButtonDefault from "../../components/ButtonDefault";
import MaquinariaGrid from "../../components/MaquinariaGrid";
import { MaquinariaData } from "../../types/index";

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

const handleChange = (e) => {
  console.log("first");
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const FakeDatas: MaquinariaData[] = [
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
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  const orugas = FakeDatas.filter((item) => item.model === "Oruga");
  const retroexcavadoras = FakeDatas.filter(
    (item) => item.model === "Retroexcavadora"
  );
  const volquetes = FakeDatas.filter((item) => item.model === "Volquete");

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const dataMaquinaria = {
  id: 0,
  brand: "",
  model: "",
  modelYear: "",
  acquisitionDate: "",
  netLoad: "",
  fuelType: "",
  createdAt: "",
  updatedAt: "",
};
const ListaMaquinarias: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const filteredData = selectedBrands.length
    ? FakeDatas.filter((unit) => selectedBrands.includes(unit.model))
    : FakeDatas;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const orugas = FakeDatas.filter((item) => item.model === "Oruga");
  const retroexcavadoras = FakeDatas.filter(
    (item) => item.model === "Retroexcavadora"
  );
  const volquetes = FakeDatas.filter((item) => item.model === "Volquete");

  return (
    <>
      <Grid container className="pb-2" alignItems="center">
        <Grid item xs={10} sm={10} md={9.8}>
          <Typography variant="button">Lista de maquinarias</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <ButtonDefault
            onClick={handleOpenNewModal}
            title="NUEVA MAQUINARIA"
          />
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Oruga" {...a11yProps(0)} />
            <Tab label="Retroexcavadora" {...a11yProps(1)} />
            <Tab label="Volquete" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <MaquinariaGrid model="Oruga" data={FakeDatas} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <MaquinariaGrid model="Retroexcavadora" data={FakeDatas} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MaquinariaGrid model="Volquete" data={FakeDatas} />
        </CustomTabPanel>
      </Box>
      <ModalFormulario
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        title="Nueva maquinaria"
        data={dataMaquinaria}
      />
    </>
  );
};
export default ListaMaquinarias;
