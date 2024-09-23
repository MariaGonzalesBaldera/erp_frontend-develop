import { Box, Modal, Zoom, IconButton, CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import HeaderModal from "../HeaderModal";
import { styleModalInspection } from "../../style/StyleModal";
import { useGetEvidenceByMachinery } from "../../hooks/useCorrectiveMaintenance";

interface ModalImageEvidenceProps {
  openModal: boolean;
  handleClose: () => void;
  id: number;
}

const ModalImageEvidence: React.FC<ModalImageEvidenceProps> = ({
  openModal,
  handleClose,
  id,
}) => {
  const { data, error, isLoading } = useGetEvidenceByMachinery(id);
  //   if (isLoading) return <p>Loaging ..</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  const [expandedImage, setExpandedImage] = useState(null); // Estado para la imagen expandida

  const handleExpand = (imageUrl) => {
    setExpandedImage(imageUrl); // Expande la imagen seleccionada
  };

  const handleCollapse = () => {
    setExpandedImage(null); // Colapsa la imagen expandida
  };
  return (
    <>
      {/* Este modal se renderiza siempre, aunque esté cerrado */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModalInspection}>
          <HeaderModal
            titleHeader={"Evidencia"}
            id={""} //aqui va el id
            handleClose={handleClose}
          />
          <div className="p-5">
            {data?.map((item) => (
              <div key={item.id} style={{ position: "relative" }}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "100%", cursor: "pointer" }}
                />
                {/* Icono de expansión */}
                {/* <IconButton
                  onClick={() => handleExpand(item.imageUrl)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                  }}
                >
                  <FullscreenIcon />
                </IconButton> */}
              </div>
            ))}
          </div>
        </Box>
      </Modal>

      {/* Modal de imagen expandida, se debe renderizar siempre aunque esté cerrado */}
      <Modal open={!!expandedImage} onClose={handleCollapse}>
        <Zoom in={!!expandedImage}>
          <Box
            sx={{
              position: "absolute",
              top: "2%",
              left: "8%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,

              border: "1px tomato solid",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "hidden",
            }}
          >
            {/* Botón para cerrar la imagen expandida */}
            <IconButton
              onClick={handleCollapse}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={expandedImage || ""}
              alt="Expanded"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Zoom>
      </Modal>
    </>
  );
};

export default ModalImageEvidence;
