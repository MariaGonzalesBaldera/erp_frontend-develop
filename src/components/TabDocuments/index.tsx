import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import PreventMaintenance from "../TamItemTable/PreventMaintenance";
import CorrectiveMaintenance from "../TamItemTable/CorrectiveMaintenance";
import InspectionMachinery from "../TamItemTable/InspectionMachinery";
import Documents from "../TamItemTable/Documents";
import {
  a11yProps,
  CustomTabPanel,
  styleTableResponsive,
  styleTabsBackground,
} from "../../style/StyleModal";
import FuelLoad from "../TamItemTable/FuelLoad";

<<<<<<< HEAD
<<<<<<< HEAD
const TabDocuments: React.FC = () => {
=======
=======
>>>>>>> feature/addAuthProcess
interface TabDocumentsProps{
  idMachinery:number
}

const TabDocuments: React.FC<TabDocumentsProps> = ({idMachinery}) => {
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid sx={styleTableResponsive}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={styleTabsBackground}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
                backgroundColor: "#1d23e5",
            },
          }}
        >
          <Tab label="Documentos" {...a11yProps(0)} />
          <Tab label="Mant. Preventivo" {...a11yProps(1)} />
          <Tab label="Mant. Correctivo" {...a11yProps(2)} />
          <Tab label="Inspecciones" {...a11yProps(3)} />
          <Tab label="Carga combustible" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
<<<<<<< HEAD
<<<<<<< HEAD
        <Documents />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PreventMaintenance mode="component" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CorrectiveMaintenance mode="component" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <InspectionMachinery />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <FuelLoad />
=======
=======
>>>>>>> feature/addAuthProcess
        <Documents idMachinery={idMachinery} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PreventMaintenance idMachinery={idMachinery} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CorrectiveMaintenance idMachinery={idMachinery} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <InspectionMachinery idMachinery={idMachinery} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <FuelLoad idMachinery={idMachinery} />
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
      </CustomTabPanel>
    </Grid>
  );
};

export default TabDocuments;
