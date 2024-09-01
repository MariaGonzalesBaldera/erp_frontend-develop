import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import { a11yProps, CustomTabPanel, styleTableResponsive, styleTabsBackground } from "../../style/StyleModal";
import MonthFilter from "../../components/AccountingComponents/MonthFilter";
import DayFilter from "../../components/AccountingComponents/DayFilter";
import StatTableInfo from "../../components/StatTableInfo";

const Accounting: React.FC = () => {
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
        <Tab label="MENSUAL" {...a11yProps(0)} />
        <Tab label="POR FECHAS" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
      <MonthFilter />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      <DayFilter />
    </CustomTabPanel>
  </Grid>
  );
};

export default Accounting;
