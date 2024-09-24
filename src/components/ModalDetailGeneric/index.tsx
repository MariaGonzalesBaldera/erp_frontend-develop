import { Box, Modal } from "@mui/material";
import React from "react";
import HeaderModal from "../HeaderModal";
import { styleModalInspection } from "../../style/StyleModal";

interface Item {
  title: string;
  value: string | number | undefined;
}

interface ModalDetailGenericProps<T> {
  openModal: boolean;
  handleClose: () => void;
  data: T;
  fields: Item[];
  title:string
}

const ModalDetailGeneric = <T,>({
  openModal,
  handleClose,
  data,
  fields,
  title
}: ModalDetailGenericProps<T>) => {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalInspection}>
        <HeaderModal
          titleHeader={title}
          id={data.id+""}
          handleClose={handleClose}
        />
        {data && (
          <div className="bg-background w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto p-1">
              {fields.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col col-span-1 md:col-span-1 border p-2"
                >
                  <span className="text-muted-foreground text-sm font-small">
                    {item.title}
                  </span>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalDetailGeneric;
