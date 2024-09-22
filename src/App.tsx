import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MachinerysList from "./pages/MachinerysList"
import { Router, Routes, Route } from 'react-router-dom';
import Layout from "./view/Layout";
import Dashboard from "./pages/Dashboard";
import DetailMachinery from "./pages/DetailMachinery";
import Documents from "./pages/Documents";
import Maintenance from "./pages/Maintenance";
import Inspections from "./pages/Inspections";
import FuelRegister from "./pages/FuelRegister";
import GpsTracking from "./pages/GpsTracking";
import Accounting from "./pages/Accounting";
import Login from "./pages/Login";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> feature/addAuthProcess
import ProtectedRoute from "../proteger";
import Rrhh from "./pages/Rrhh";
import UserManagement from "./pages/UserManagement";
import Income from "./pages/Income";
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess

export function App() {
  return (
      <div className="app">
      <CssBaseline />
        <Routes>
          {/* Login Route outside of Layout */}
          <Route path="/login" element={<Login />} />

          {/* Routes inside Layout */}
          <Route
            path="/*"
            element={
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <ProtectedRoute>
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
              <ProtectedRoute>
>>>>>>> feature/addAuthProcess
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/machinery-list" element={<MachinerysList />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/detail-machinery/:id" element={<DetailMachinery />} />
                  <Route path="/maintenance" element={<Maintenance />} />
                  <Route path="/inspections" element={<Inspections />} />
                  <Route path="/fuel-register" element={<FuelRegister />} />
                  <Route path="/gps-tracking" element={<GpsTracking />} />
                  <Route path="/accounting" element={<Accounting />} />
<<<<<<< HEAD
<<<<<<< HEAD
                </Routes>
              </Layout>
=======
=======
>>>>>>> feature/addAuthProcess
                  <Route path="/human-resources" element={<Rrhh />} />
                  <Route path="/income" element={<Income />} />
                  <Route path="/user-management" element={<UserManagement />} />
                </Routes>
              </Layout>
              </ProtectedRoute>
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
            }
          />
        </Routes>
      </div>
  );
}
