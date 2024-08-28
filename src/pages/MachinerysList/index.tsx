import React from "react";

import Box from "@mui/material/Box";
import { Tab, Tabs } from "@mui/material";
import ModalForm from "../../components/ModalForm";
import MachineGrid from "../../components/MachineGrid";
import HeaderPage from "../../components/HeaderPage";
import { a11yProps, CustomTabPanel, styleTabsBackground } from "../../style/StyleModal";
import { useGetMachineryList } from "../../hooks/useMaquinaria";

const handleChange = (e) => {
  console.log("first");
};
const handleSubmit = (e) => {
  e.preventDefault();
};
 
const dataMaquinaria = {
  id: 0,
  brand: "",
  model: "",
  modelYear: "",
  acquisitionDate: "",
  netLoad: "",
  fuelType: "",
};
const MachinerysList: React.FC = () => {
  const [openModalNew, setOpenModalNew] = React.useState(false);
  const handleOpenNewModal = () => setOpenModalNew(true);
  const handleCloseNewModal = () => setOpenModalNew(false);

  const {
  	data: machineryData,
  } = useGetMachineryList();
  console.log("DATA "+machineryData)

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <HeaderPage
        title="LISTA DE MAQUINARIA"
        titleButton="NUEVA MAQUINARIA"
        handleOpen={handleOpenNewModal}
        mode="maquinaria"
      />
      <Box sx={{ width: "100%" }}>
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
            <Tab label="Oruga" {...a11yProps(0)} />
            <Tab label="Retroexcavadora" {...a11yProps(1)} />
            <Tab label="Volquete" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <MachineGrid model="oruga" data={machineryData || []} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <MachineGrid model="retroexcavadora" data={machineryData || []} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MachineGrid model="volquete" data={machineryData || []} />
        </CustomTabPanel>
      </Box>
      <ModalForm
        openModal={openModalNew}
        handleClose={handleCloseNewModal}
        data={dataMaquinaria}
        mode="create"
      />
    </>
  );
};
export default MachinerysList;
