import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import PreventMaintenance from "../TamItemTable/PreventMaintenance";
import CorrectiveMaintenance from "../TamItemTable/CorrectiveMaintenance";
import InspectionMachinery from "../TamItemTable/InspectionMachinery";
import Documents from "../TamItemTable/Documents";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
        <Box sx={{ pt: 2, backgroundColor: "white" }}>{children}</Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabDocumentos: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <Grid
        sx={{
          width: "100%",
          minWidth: "300px",
          maxWidth: "800px",
          margin: "0 0",
          padding: "1px",
          backgroundColor: "#cac7fe",
          "@media (max-width: 600px)": {
            minWidth: "100px",
            maxWidth: "400px",
          },
          "@media (min-width: 1200px)": {
            minWidth: "100%",
            maxWidth: "1000px",
          },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Documentos" {...a11yProps(0)} />
            <Tab label="Mant. Preventivo" {...a11yProps(1)} />
            <Tab label="Mant. Correctivo" {...a11yProps(2)} />
            <Tab label="Inspecciones" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Documents />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PreventMaintenance />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <CorrectiveMaintenance />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <InspectionMachinery />
        </CustomTabPanel>
      </Grid>
  );
};

export default TabDocumentos;
