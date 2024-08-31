import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Chip,
  styled,
  Tooltip,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import retroexcavadora from "../../images/retro2.png";
import volquete from "../../images/volquete22.png";
import oruga from "../../images/orugax.png";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import ModalForm from "../ModalForm";
import { MachineryResponse } from "../../domain/machinery.interface";
import { capitalizer } from "../../utils/capitalize";

interface BasicCardProps {
  data: MachineryResponse;
  index: number;
}

const BasicCard: React.FC<BasicCardProps> = ({ data, index }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/detail-machinery/${data.id}`, {
      state: {
        id: data.id,
        brand: data.brand,
        model: data.model,
        modelYear: data.modelYear,
        acquisitionDate: data.acquisitionDate,
        netLoad: data.netLoad,
        fuelType: data.fuelType,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      },
    });
  };
  const getImage = () => {
    switch (data.model) {
      case "eetroexcavadora":
        return retroexcavadora;
      case "oruga":
        return oruga;
      case "volquete":
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
  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const [openModalUpDate, setOpenModalUpDate] = React.useState(false);

  const handleOpenUpdate = () => setOpenModalUpDate(true);
  const handleCloseUpdate = () => setOpenModalUpDate(false);

  const handleOpenConfirmModal = () => setOpenModalConfirm(true);
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const colorsCard = (index: number) => {
    const colorsItem = ["#383977", "#6374ae"];
    return colorsItem[index % colorsItem.length];
  };

  return (
    <StyledCard>
      <Card
        className="w-45 mx-auto shadow-lg"
        sx={{
          border: "1px #b6b5c4 solid",
          background: colorsCard(index), //"#302d82"//"linear-gradient(to bottom, #7988ff ,#fff)", //  #14109f
          //borderBottom:"4px # 0e0a5c solid"
        }}
      >
        <CardMedia
          component="img"
          alt={`Imagen de ${data.model}`}
          height="140"
          image={getImage()}
          style={{ height: "120px", objectFit: "cover" }}
        />
        <CardContent>
          <h2 className="text-base font-bold mb-2 text-slate-100 ">
            {"CÓDIGO ID " + data.id}
          </h2>
          <Stack sx={{justifyContent:"space-around"}} direction="row" gap={1}>
            <Chip
              label={capitalizer(data.model)}
              variant="outlined"
              sx={{ color: "white",border:`1px ${colorsCard(index+1)} solid`}}
            />
            <Chip
              label={data.brand}
              variant="outlined"
              sx={{ color: "white",border:`1px ${colorsCard(index+1)} solid` }}
            />
          </Stack>
          <div className="flex justify-between mt-2">
            <Tooltip title="Editar">
              <IconButton
                sx={{
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#e3e8fc",
                    color: colorsCard(index),
                  },
                }}
                color="success"
                onClick={handleOpenUpdate}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Detalle">
              <IconButton
                sx={{
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#e3e8fc",
                    color: colorsCard(index),
                  },
                }}
                color="warning"
                onClick={handleNavigation}
              >
                <ListIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Eliminar">
              <IconButton
                sx={{
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#e3e8fc",
                    color: colorsCard(index),
                  },
                }}
                color="error"
                onClick={handleOpenConfirmModal}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </CardContent>
        <ConfirmModal
          onConfirm={openModalConfirm}
          onCancel={handleCloseConfirmModal}
          id={data.id?.toString()}
        />
        <ModalForm
          openModal={openModalUpDate}
          handleClose={handleCloseUpdate}
          data={data}
          mode="update"
        />
      </Card>
    </StyledCard>
  );
};

export default BasicCard;
