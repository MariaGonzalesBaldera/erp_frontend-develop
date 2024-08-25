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
import retroexcavadora from "../../images/retro.png";
import volquete from "../../images/volquete2.png";
import oruga from "../../images/oruga2.png";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import { MaquinariaDataItem } from "../../types/index";
import ModalForm from "../ModalForm";

interface BasicCardProps {
  data: MaquinariaDataItem;
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
  const [openModalConfirm, setOpenModalConfirm] = React.useState(false);
  const [openModalUpDate, setOpenModalUpDate] = React.useState(false);

  const handleOpenUpdate = () => setOpenModalUpDate(true);
  const handleCloseUpdate = () => setOpenModalUpDate(false);

  const handleOpenConfirmModal = () => setOpenModalConfirm(true);
  const handleCloseConfirmModal = () => setOpenModalConfirm(false);

  const colorsCard = (index: number) => {
    const colorsItem = ["#e9ebc8", "#e8f4df", "#e9ebc8", "#e8f4df"];
    return colorsItem[index % colorsItem.length];
  };

  return (
    <StyledCard>
      <Card
        className="w-45 mx-auto shadow-lg"
        sx={{
          border:"1px #b6b5c4 solid",
          background: "#fff",
          borderBottom:"5px #6c63f1 solid"
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
          <h2 className="text-base font-bold mb-2 color ">
            {"Maquinaria # " + data.id}
          </h2>
          <Stack direction="row" gap={2}>
            <Chip label={data.model} variant="filled" sx={{color:"#1e1b4b"}} />
            <Chip label={data.brand} variant="filled" sx={{color:"#1e1b4b"}}  />
          </Stack>
          <div className="flex justify-between mt-2">
            <Tooltip title="Editar">
              <IconButton color="success" onClick={handleOpenUpdate}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Detalle">
              <IconButton color="warning" onClick={handleNavigation}>
                <ListIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Eliminar">
              <IconButton color="error" onClick={handleOpenConfirmModal}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </CardContent>
        <ConfirmModal
          onConfirm={openModalConfirm}
          onCancel={handleCloseConfirmModal}
          id={data.id}
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
