import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import themeNew from "../../utils/theme";
import PreventMaintenance from "../TamItemTable/PreventMaintenance";
import CorrectiveMaintenance from "../TamItemTable/CorrectiveMaintenance";

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
    <Grid>
      <Typography sx={{marginBottom:"1rem"}} color={themeNew.palette.surface.main} variant="subtitle2">
        DOCUMENTOS
      </Typography>
      <Box sx={{
        width: '100%',
        minWidth: '300px',
        maxWidth: '800px',
        margin: '0 0',
        padding: '4px',
        backgroundColor: '#cac7fe',
        '@media (max-width: 600px)': {
          minWidth: '100px',
          maxWidth: '400px',
        },
        '@media (min-width: 1200px)': {
          minWidth: '600px',
          maxWidth: '1000px',
        },
      }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Mant. Preventivo" {...a11yProps(0)} />
            <Tab label="Mant. Correctivo" {...a11yProps(1)} />
            <Tab label="Inspecciones" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <PreventMaintenance/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CorrectiveMaintenance/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Grid>
  );
};

export default TabDocumentos;
