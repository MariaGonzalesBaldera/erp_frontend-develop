import React from "react";

import Box from "@mui/material/Box";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import ModalFormulario from "../../components/ModalFormulario";
import ButtonDefault from "../../components/ButtonDefault";
import MaquinariaGrid from "../../components/MaquinariaGrid";
import { MaquinariaDataItem } from "../../types/index";
import themeNew from "../../utils/theme";
 
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
const FakeDatas: MaquinariaDataItem[] = [
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

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: themeNew.palette.textMain.main }}>{children}</Box>
      )}
    </div>
  );
 //           sx={{backgroundColor:themeNew.palette.textMain.main}}
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
  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  //const {
  //	data: machineryData,
  //} = useGetMachineryList();
  //console.log("DATA "+machineryData)
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
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
            <Tab            
            label="Oruga" {...a11yProps(0)} />
            <Tab label="Retroexcavadora" {...a11yProps(1)} />
            <Tab label="Volquete" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel
         value={value} index={0}>
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
        data={dataMaquinaria}
      />
    </>
  );
};
export default ListaMaquinarias;
