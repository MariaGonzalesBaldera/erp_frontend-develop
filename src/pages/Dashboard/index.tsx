import {
  Assignment,
  MiscellaneousServices,
  SvgIconComponent,
} from "@mui/icons-material";
import React from "react";
import themeNew from "../../utils/theme";
import StatTableInfo from "../../components/StatTableInfo";
import CircularBarCard from "../../components/CircularBarCard";
import { useLocation } from "react-router-dom";

import { DriveEta, LocationOn } from "@mui/icons-material";
import { Box, Card, CircularProgress } from "@mui/material";
import { useGetMachineryList } from "../../hooks/useMaquinaria";

interface CardItemDashboardProps {
  title: string;
  value: any;
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
      </Box>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const { data: machineryData,isLoading } = useGetMachineryList();
  const location = useLocation();
  const { username, role } = location.state || {};
  const percentage = 70;
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
      <CardItemDashboard
          title="Total Maquinarias"
          value={isLoading ? <CircularProgress size={24} /> : machineryData?.length?.toString() || "0"}
          icon={DriveEta}
          colorIcon="#ff5f5f"
        />
        <CardItemDashboard
          title="GPS Activos"
          value="2"
          icon={LocationOn}
          colorIcon="#6492f6"
        />
        <CardItemDashboard
          title="Maquinarias en Reparación"
          value="5"
          icon={MiscellaneousServices}
          colorIcon="#12af25"
        />
        <CardItemDashboard
          title="Maquinarias en inspección"
          value="12"
          icon={Assignment}
          colorIcon="#fb7609"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 max-w-full mx-auto p-4 md:p-0 mt-4">
        <Box className="space-y-6">
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
            <StatTableInfo />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
