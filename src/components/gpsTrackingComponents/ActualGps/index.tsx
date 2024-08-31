import { SearchSharp } from "@mui/icons-material";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import ButtonDefault from "../../ButtonDefault";
import themeNew from "../../../utils/theme";

const ActualGps: React.FC = () => {
  const handleChange = useCallback((e) => {
    (prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
      <div className="col-span-1 md:col-span-1 border flex items-start justify-start p-4">
        <Grid
          container
          spacing={0.5}
          justifyItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={10}>
            <TextField
              label="Unidad"
              name="unidad"
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            sx={{
              display: "flex",
            }}
          >
            <SearchSharp
              sx={{
                border: `1px ${themeNew.palette.outline.main} solid`,
                width: 45,
                height: 40,
                padding: 0.8,
                cursor: "pointer",
                borderRadius: 1,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box className="border border-gray-300 p-4 rounded-md mt-1">
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem aut alias aliquid, libero quaerat sapiente in quisquam
                dolorum et nihil necessitatibus asperiores odit animi
                voluptatibus iste perferendis unde, voluptatum quam. Praesentium
                ducimus archi non repellendus perspiciatis ipsa veniam
                temporibus velit aliquid. Minima.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className="col-span-1 md:col-span-2 border flex items-center justify-start p-0">
        <div className="w-full h-0 pb-[56.25%] relative">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15617.55636141443!2d-77.1370109!3d-11.87797195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1725071318483!5m2!1ses-419!2spe"
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ActualGps;
