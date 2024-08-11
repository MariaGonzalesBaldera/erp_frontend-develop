import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ListaMaquinarias from "./pages/ListaMaquinarias"
import { Route, Routes } from 'react-router-dom';
import Layout from './view/Layout';
import Dashboard from './pages/Dashboard';
import DetalleMaquinaria from './pages/DetalleMaquinaria';


export function App() {
    return (
    <React.Fragment>
        <CssBaseline />
                <Layout>
			        <Routes>
					    <Route path="/dashboard" element={<Dashboard />} />			
					    <Route path="/lista-maquinarias" element={<ListaMaquinarias />} />			
					    <Route path="/lista-utilidades" element={<ListaMaquinarias />} />			
					    <Route path="/lista-utilidades" element={<ListaMaquinarias />} />			
					    <Route path="/detalle-maquinaria/:id" element={<DetalleMaquinaria />} />			
					</Routes>
				</Layout>
        
    </React.Fragment>)
}