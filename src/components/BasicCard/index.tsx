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
import retroexcavadora from "../../images/demoledor4.png";
import volquete from "../../images/volete.png";
import oruga from "../../images/oruga.png";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import ModalActualizarData from "../ModalActualizarData";
import { MaquinariaDataItem } from "../../types/index";
import themeNew from "../../utils/theme";
import ModalFormulario from "../ModalFormulario";

interface BasicCardProps {
  data: MaquinariaDataItem;
}

const BasicCard: React.FC<BasicCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/detalle-maquinaria/${data.id}`, {
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

  return (
    <StyledCard>
      <Card
        className="w-45 mx-auto shadow-lg"
        sx={{ backgroundColor: themeNew.palette.textMain.main }}
      >
        <CardMedia
          component="img"
          alt={`Imagen de ${data.model}`}
          height="140"
          image={getImage()}
          style={{ height: "140px", objectFit: "cover" }}
        />
        <CardContent>
          <h2 className="text-base font-bold mb-2">
            {"Maquinaria # " + data.id}
          </h2>
          <Stack direction="row" gap={2}>
            <Chip label={data.model} variant="outlined" color="success" />
            <Chip label={data.brand} variant="outlined" color="success" />
          </Stack>
          <div className="flex justify-between mt-2">
            <Tooltip title="Editar">
              <IconButton onClick={handleOpenUpdate}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Detalle">
              <IconButton onClick={handleNavigation}>
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
        <ModalFormulario
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
