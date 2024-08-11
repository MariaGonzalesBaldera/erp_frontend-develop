import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Chip,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import retroexcavadora from "../../images/demoledor4.png";
import volquete from "../../images/volete.png";
import oruga from "../../images/oruga.png";
import { useNavigate } from "react-router-dom";

interface BasicCardProps {
  id: number;
  brand: string;
  model: string;
  modelYear: string;
  acquisitionDate: string;
  netLoad: string;
  fuelType: string;
  createdAt: string;
  updatedAt: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
  id,
  brand,
  model,
  modelYear,
  acquisitionDate,
  netLoad,
  fuelType,
  createdAt,
  updatedAt,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/detalle-maquinaria/${id}`, {
      state: {
        id,
        brand,
        model,
        modelYear,
        acquisitionDate,
        netLoad,
        fuelType,
        createdAt,
        updatedAt,
      },
    });
  };
  const getImage = () => {
    switch (model) {
      case "Retroexcavadora":
        return retroexcavadora;
      case "Oruga":
        return oruga;
      case "Volquete":
        return volquete;
      default:
        return retroexcavadora;
    }
  };

  const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[6],
    },
  }));

  return (
    <StyledCard>
      <Card className="w-45 mx-auto shadow-lg">
        <div onClick={handleNavigation} style={{ cursor: "pointer" }}>
          <CardMedia
            component="img"
            alt={`Imagen de ${model}`}
            height="140"
            image={getImage()}
            style={{ height: "140px", objectFit: "cover" }}
          />
          <CardContent>
            <h2 className="text-base font-bold mb-2">{"Maquinaria # " + id}</h2>
            <Stack direction="row"  gap={2}>
              <Chip label={model} variant="outlined" color="success" />
              <Chip label={brand} variant="outlined" color="warning" />

            </Stack>
            <div className="flex justify-between mt-2">
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <UpdateIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </div>
          </CardContent>
        </div>
      </Card>
    </StyledCard>
  );
};

export default BasicCard;
