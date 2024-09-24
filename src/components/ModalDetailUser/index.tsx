import React from "react";
import { UserItem } from "../../types";
import { Box, Modal } from "@mui/material";
import { styleModalInspection } from "../../style/StyleModal";
import HeaderModal from "../HeaderModal";

interface ModalDetailUserProps {
  openModal: boolean;
  handleClose: () => void;
  data: UserItem;
}

const ModalDetailUser: React.FC<ModalDetailUserProps> = ({
    openModal,
  handleClose,
  data,
}) => {
    return (
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModalInspection}>
            <HeaderModal
              titleHeader={"DETALLE USUARIO CÓDIGO "}
              id={data.id ||""} //aqui va el id
              handleClose={handleClose}
            />
            {data && (
              <div className="bg-background  w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
                <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                  <span className="text-muted-foreground text-sm font-small">
                    Usuario:
                  </span>
                  <span className="text-sm font-bold">
                    {data.username}
                  </span>
                </div>
                <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                  <span className="text-muted-foreground text-sm font-small">
                    Nombre:
                  </span>
                  <span className="text-sm font-bold">
                    {data.firstname}
                  </span>
                </div>
                <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                  <span className="text-muted-foreground text-sm font-small">
                    Apellido:
                  </span>
                  <span className="text-sm font-bold">{data.lastname}</span>
                </div>
                <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                  <span className="text-muted-foreground text-sm font-small">
                    Correo:
                  </span>
                  <span className="text-sm font-bold">{data.email}</span>
                </div>
                <div className="flex flex-col col-span-1 md:col-span-1 border p-2">
                  <span className="text-muted-foreground text-sm font-small">
                    Rol:
                  </span>
                  <span className="text-sm font-bold">{data.role}</span>
                </div>
             
              </div>
            </div>
            )}
          </Box>
        </Modal>
      );
};

export default ModalDetailUser;
