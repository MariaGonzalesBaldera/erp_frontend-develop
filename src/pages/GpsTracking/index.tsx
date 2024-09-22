import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import { a11yProps, CustomTabPanel, styleTableResponsive, styleTabsBackground } from "../../style/StyleModal";
import ActualGps from "../../components/gpsTrackingComponents/ActualGps";
import HistoryGps from "../../components/gpsTrackingComponents/HIstoryGps";

const GpsTracking: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return(
    <Grid sx={styleTableResponsive}>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        sx={styleTabsBackground}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="ACTUAL" {...a11yProps(0)} />
        <Tab label="HISTÓRICO" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
      <ActualGps />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      <HistoryGps />
    </CustomTabPanel>
  </Grid>
  );
};

export default GpsTracking;
