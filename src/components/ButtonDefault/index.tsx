import React from "react";
import themeNew from "../../utils/theme";
import { Button } from "@mui/material";

interface ButtonDefaultProps {
  title: string;
    onClick?: () => void;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({ title, onClick }) => {
  return (
    <Button
      sx={{
        backgroundColor: themeNew.palette.primary.main,
        "&:hover": {
          backgroundColor: "white",
          color: themeNew.palette.primary.main,
          border: `1px ${themeNew.palette.primary.main} solid`,
        },
      }}
      type="submit"
      variant="contained"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ButtonDefault;
