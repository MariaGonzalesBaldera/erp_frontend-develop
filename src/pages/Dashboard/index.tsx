import {
  Assignment,
  MiscellaneousServices,
  SvgIconComponent,
} from "@mui/icons-material";
import React from "react";
import themeNew from "../../utils/theme";
import StatTableInfo from "../../components/StatTableInfo";
import CircularBarCard from "../../components/CircularBarCard";

import { DriveEta, LocationOn } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

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
    <Card sx={{backgroundColor:colorIcon,border:"2px #fff solid"}} 
    className="flex items-start justify-between col-span-1 md:col-span-1 p-2">
      <Icon sx={{ color: colorIcon,backgroundColor:"white",padding:0.3,borderRadius:1 }}/>

      <Box className="p-3 text-end">
        <div className="text-2xl font-bold text-white">{value}</div>
        <p className="text-sm text-white font-bold pl-1 pr-1 rounded-sm">{title}</p>
      </Box>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const percentage = 70;
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
        <CardItemDashboard
          title="Total Maquinarias"
          value="150"
          icon={DriveEta}
          colorIcon="#ff5f5f"
        />
        <CardItemDashboard
          title="GPS Activos"
          value="75"
          icon={LocationOn}
          colorIcon="#6492f6"
        />
        <CardItemDashboard
          title="Maquinarias en Reparación"
          value="20"
          icon={MiscellaneousServices}
          colorIcon="#12af25"
        />
        <CardItemDashboard
          title="Maquinarias en inspección"
          value="40"
          icon={LocationOn}
          colorIcon="#fb7609"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 max-w-full mx-auto p-4 md:p-6">
        <div className="space-y-6">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 space-y-4">
              <CircularBarCard color="#12af25" percentage={percentage} />
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 space-y-4">
              <CircularBarCard color="#ff5f5f" percentage={percentage} />
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 space-y-4">
            <StatTableInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
