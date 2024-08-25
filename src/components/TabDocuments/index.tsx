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

const TabDocuments: React.FC = () => {
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
              backgroundColor: "#2470ec",
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
      </CustomTabPanel>
    </Grid>
  );
};

export default TabDocuments;
