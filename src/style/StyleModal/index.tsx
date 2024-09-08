import React from "react";
import { Box } from "@mui/material";
import { MaintenanceProps } from "../../types";

//style

export const styleModalInspection = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "70%",
    md: "50%",
    lg: "45%",
  },
  minHeight: "260px", // Altura mínima
  maxHeight: "580px", // Altura máxima
  bgcolor: "background.paper",
  boxShadow: 24,
  overflowY: "auto",
};

export const styleTableResponsive = {
  width: "100%",
  minWidth: "300px",
  maxWidth: "800px",
  margin: "0 0",
  padding: "1px",
  "@media (max-width: 600px)": {
    minWidth: "100px",
    maxWidth: "400px",
  },
  "@media (min-width: 1200px)": {
    minWidth: "100%",
    maxWidth: "1000px",
  },
};

export const styleTabsBackground = {
  "& .MuiTab-root": {
    backgroundColor: "#0f1b38",
    border: "1px #fff solid",
    color: "#fff",
  },
  "& .Mui-selected": {
    backgroundColor: "#bdd3ff",
    color: "#1e1b4b",
  },
};
export const styleTableItem = {
  "& .MuiDataGrid-cell": {
    color: "#333",
    border: "1px solid #ccc", 
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#332e81",
    border: "1px solid #ccc", 
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      color: "white",
    },
  },
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: "#f9f9f9",
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "#e0e0e0",
  } 
};

export function CustomTabPanel(props: MaintenanceProps) {
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
        <Box sx={{ p: 2, backgroundColor: "white" }}>{children}</Box>
      )}
    </div>
  );
}
export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
