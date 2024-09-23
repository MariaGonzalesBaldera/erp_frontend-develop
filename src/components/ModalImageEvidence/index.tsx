import { Box, Modal } from "@mui/material";
import React from "react";
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
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
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
        <div>
          {data?.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.imageUrl} alt={item.name} />
            </div>
          ))}
        </div>{" "}
      </Box>
    </Modal>
  );
};

export default ModalImageEvidence;
