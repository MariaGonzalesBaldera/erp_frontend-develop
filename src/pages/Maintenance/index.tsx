import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import {
  a11yProps,
  CustomTabPanel,
  styleTableResponsive,
  styleTabsBackground,
} from "../../style/StyleModal";
import PreventMaintenance from "../../components/TamItemTable/PreventMaintenance";
import CorrectiveMaintenance from "../../components/TamItemTable/CorrectiveMaintenance";
import SearchInput from "../../components/SearchInput";

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
        <PreventMaintenance mode="page" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CorrectiveMaintenance mode="page" />
      </CustomTabPanel>
    </Grid>
  );
};

export default Maintenance;
