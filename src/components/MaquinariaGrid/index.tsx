import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "../BasicCard";
import { MaquinariaData } from "../../types/index";

interface MachineGridProps {
  model: string;
  data: MaquinariaData[];
}

const MaquinariaGrid: React.FC<MachineGridProps> = ({ model, data }) => {
  const filteredData = data.filter((item) => item.model === model);

  return (
    <Grid container spacing={2}>
      {filteredData.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={item.id}>
          <BasicCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MaquinariaGrid;
