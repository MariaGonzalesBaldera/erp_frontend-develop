import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import themeNew from "../../utils/theme";

interface CircularBarCardProps {
<<<<<<< HEAD
<<<<<<< HEAD
  title:string;
=======
  title: string;
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  title: string;
>>>>>>> feature/addAuthProcess
  percentage: number;
  color: string;
}

const CircularBarCard: React.FC<CircularBarCardProps> = ({
  title,
  percentage,
  color,
}) => {
  return (
    <Card sx={{ textAlign: "center" }}>
      <CardContent>
        <Typography
<<<<<<< HEAD
<<<<<<< HEAD
          sx={{ backgroundColor: themeNew.palette.primary.main, 
            color: "white",
            fontSize:16,fontWeight:"bold",
          borderRadius:1 }}
=======
=======
>>>>>>> feature/addAuthProcess
          sx={{
            backgroundColor: themeNew.palette.primary.main,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            borderRadius: 1,
          }}
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
          component="div"
          gutterBottom
        >
          {title}
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={percentage}
            size={80}
            thickness={4.5}
            sx={{ color: color }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="textSecondary"
              sx={{ fontSize: "1rem", color: color }}
            >{`${percentage}%`}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="black">
          Operativa
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CircularBarCard;
