import React from "react";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

interface CheckInspectionCardProps {
  title: string;
  data: boolean;
}

const CheckInspectionCard: React.FC<CheckInspectionCardProps> = ({ data,title }) => {
  return (
    <span className="text-muted-foreground text-sm font-medium">
      {title}{" "}
      {data ? (
        <CheckBoxIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
      ) : (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#aaa5fc" }} />
      )}
    </span>
  );
};

export default CheckInspectionCard;
