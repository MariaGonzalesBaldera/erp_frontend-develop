import {
  Assignment,
  MiscellaneousServices,
  SvgIconComponent,
} from "@mui/icons-material";
import React from "react";
import themeNew from "../../utils/theme";
import StatTableInfo from "../../components/StatTableInfo";
import CircularBarCard from "../../components/CircularBarCard";
<<<<<<< HEAD

import { DriveEta, LocationOn } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
=======
import { useLocation } from "react-router-dom";

import { DriveEta, LocationOn } from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import { useGetMachineryList } from "../../hooks/useMaquinaria";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

interface CardItemDashboardProps {
  title: string;
  value: string;
  icon: SvgIconComponent;
  colorIcon?: string;
}

export const CardItemDashboard: React.FC<CardItemDashboardProps> = ({
  title,
  value,
  icon: Icon,
  colorIcon,
}) => {
  return (
<<<<<<< HEAD
    <Card sx={{backgroundColor:themeNew.palette.primary.main,border:"2px #fff solid"}} 
    className="flex items-start justify-between col-span-1 md:col-span-1 p-2">
      <Icon sx={{ color: "white",backgroundColor:colorIcon,padding:0.3,borderRadius:1 }}/>

      <Box className="p-3 text-end">
        <div className="text-2xl font-bold text-white">{value}</div>
        <p className="text-sm text-white font-bold pl-1 pr-1 rounded-sm">{title}</p>
=======
    <Card
      sx={{
        backgroundColor: themeNew.palette.primary.main,
        border: "2px #fff solid",
      }}
      className="flex items-start justify-between col-span-1 md:col-span-1 p-2"
    >
      <Icon
        sx={{
          color: "white",
          backgroundColor: colorIcon,
          padding: 0.3,
          borderRadius: 1,
        }}
      />

      <Box className="p-3 text-end">
        <div className="text-2xl font-bold text-white">{value}</div>
        <p className="text-sm text-white font-bold pl-1 pr-1 rounded-sm">
          {title}
        </p>
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
      </Box>
    </Card>
  );
};

const Dashboard: React.FC = () => {
<<<<<<< HEAD
=======
  const { data: machineryData } = useGetMachineryList();
  const location = useLocation();
  const { username, role } = location.state || {};
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
  const percentage = 70;
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
        <CardItemDashboard
          title="Total Maquinarias"
<<<<<<< HEAD
          value="150"
=======
          value={machineryData?.length+"" || ""}
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
          icon={DriveEta}
          colorIcon="#ff5f5f"
        />
        <CardItemDashboard
          title="GPS Activos"
<<<<<<< HEAD
          value="75"
=======
          value="2"
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
          icon={LocationOn}
          colorIcon="#6492f6"
        />
        <CardItemDashboard
          title="Maquinarias en Reparación"
<<<<<<< HEAD
          value="20"
=======
          value="5"
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
          icon={MiscellaneousServices}
          colorIcon="#12af25"
        />
        <CardItemDashboard
          title="Maquinarias en inspección"
<<<<<<< HEAD
          value="40"
=======
          value="12"
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
          icon={Assignment}
          colorIcon="#fb7609"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 max-w-full mx-auto p-4 md:p-0 mt-4">
        <Box className="space-y-6">
<<<<<<< HEAD
          <Box className="bg-card rounded-lg shadow-lg overflow-hidden" sx={{backgroundColor:"#3e2e81"}}>
            <div className="p-3 space-y-4">
              <CircularBarCard title="Maquinarias disponibles" color="#12af25" percentage={percentage} />
            </div>
          </Box>
          <Box className="bg-card rounded-lg shadow-lg overflow-hidden" sx={{backgroundColor:"#3e2e81"}}>
            <div className="p-3 space-y-4">
              <CircularBarCard title="Maquinarias en obra" color="#ff5f5f" percentage={percentage} />
            </div>
          </Box>
        </Box> 
        <Box className="bg-card rounded-lg shadow-lg overflow-hidden" sx={{backgroundColor:"#3e2e81"}}>
          <div className="p-2 space-y-4">
=======
          <Box
            className="bg-card rounded-lg shadow-lg overflow-hidden"
            sx={{ backgroundColor: "#aaa5fc" }}
          >
            <div className="p-3 space-y-4">
              <CircularBarCard
                title="Maquinarias disponibles"
                color="#12af25"
                percentage={40}
              />
            </div>
          </Box>
          <Box
            className="bg-card rounded-lg shadow-lg overflow-hidden"
            sx={{ backgroundColor: "#aaa5fc" }}
          >
            <div className="p-3 space-y-4">
              <CircularBarCard
                title="Maquinarias en obra"
                color="#ff5f5f"
                percentage={percentage}
              />
            </div>
          </Box>
        </Box>
        <Box
          className="bg-card rounded-lg shadow-lg overflow-hidden"
          sx={{ backgroundColor: "#aaa5fc" }}
        >
          <div className="p-2 space-y-4 ">
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
            <StatTableInfo />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
