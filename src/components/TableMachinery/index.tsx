import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const TableMachinery: React.FC = ({ rows, columns }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        className="truncate..."
        hideFooter
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default TableMachinery;
