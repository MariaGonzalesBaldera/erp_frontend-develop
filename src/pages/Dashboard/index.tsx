import {
  Assignment,
  FormatColorFillSharp,
  MiscellaneousServices,
} from "@mui/icons-material";
import React from "react";
import themeNew from "../../utils/theme";
import StatTableInfo from "../../components/StatTableInfo";
import CircularBarCard from "../../components/CircularBarCard";

import { DriveEta, LocationOn } from "@mui/icons-material";

function Dashboard() {
  const percentage = 70;
  return (
    <div className="p-3">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white shadow-lg rounded-lg p-2">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-sm mb-1 font-medium">Total Maquinarias</h5>
              <p className="text-1xl font-bold text-indigo-950">150</p>
            </div>
            <DriveEta
              sx={{
                width: 32,
                height: 32,
                color: "white",
                padding: 0.7,
                backgroundColor: themeNew.palette.primary.main,
                borderRadius: 1,
              }}
            />
            {/* Ícono al final */}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-2">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-sm mb-1 font-medium">GPS Activos</h5>
              <p className="text-1xl font-bold text-indigo-950">75</p>
            </div>
            <LocationOn
              sx={{
                width: 32,
                height: 32,
                color: "white",
                padding: 0.7,
                backgroundColor: themeNew.palette.primary.main,
                borderRadius: 1,
              }}
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-2">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-sm mb-1 font-medium">
                Maquinarias en Reparación
              </h5>
              <p className="text-1xl font-bold text-indigo-950">20</p>
            </div>
            <MiscellaneousServices
              sx={{
                width: 32,
                height: 32,
                color: "white",
                padding: 0.7,
                backgroundColor: themeNew.palette.primary.main,
                borderRadius: 1,
              }}
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-2">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-sm mb-1 font-medium">
                Maquinarias en inspección
              </h5>
              <p className="text-1xl font-bold text-indigo-950">20</p>
            </div>
            <Assignment
              sx={{
                width: 32,
                height: 32,
                color: "white",
                padding: 0.7,
                backgroundColor: themeNew.palette.primary.main,
                borderRadius: 1,
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 max-w-full mx-auto p-4 md:p-6">
        <div className="space-y-6">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 space-y-4">
              <CircularBarCard color="#4caf50" percentage={percentage} />
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 space-y-4">
              <CircularBarCard color="#d5e21d" percentage={percentage} />
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
}

export default Dashboard;
