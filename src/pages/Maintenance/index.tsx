import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import {
  a11yProps,
  CustomTabPanel,
  styleTableResponsive,
  styleTabsBackground,
} from "../../style/StyleModal";
import PreventMaintenancePage from "../../components/MaintenanceTab/PreventMaintenancePage";
import CorrectiveMaintenancePage from "../../components/MaintenanceTab/CorrectiveMaintenancePage";

const Maintenance: React.FC = () => {
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
        >
          <Tab label="Mant. Preventivo" {...a11yProps(0)} />
          <Tab label="Mant. Correctivo" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PreventMaintenancePage  />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CorrectiveMaintenancePage />
      </CustomTabPanel>
    </Grid>
  );
};

export default Maintenance;
