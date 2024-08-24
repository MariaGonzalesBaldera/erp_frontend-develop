import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MachinerysList from "./pages/MachinerysList"
import { Route, Routes } from "react-router-dom";
import Layout from "./view/Layout";
import Dashboard from "./pages/Dashboard";
import DetailMachinery from "./pages/DetailMachinery";
import Documents from "./pages/Documents";
import Maintenance from "./pages/Maintenance";
import Inspections from "./pages/Inspections";
import FuelRegister from "./pages/FuelRegister";
import GpsTracking from "./pages/GpsTracking";
import Accounting from "./pages/Accounting";

export function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/machinery-list" element={<MachinerysList />} />
          <Route path="/documents" element={<Documents />} />
          <Route
            path="/detail-machinery/:id"
            element={<DetailMachinery />}
          />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/inspections" element={<Inspections />} />
          <Route path="/fuel-register" element={<FuelRegister />} />
          <Route path="/gps-tracking" element={<GpsTracking />} />
          <Route path="/accounting" element={<Accounting />} />

        </Routes>
      </Layout>
    </React.Fragment>
  );
}
