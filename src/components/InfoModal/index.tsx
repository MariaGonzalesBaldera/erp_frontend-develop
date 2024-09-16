import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  userName: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ open, onClose, userName }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle className="text-lg font-bold text-gray-900">
        Información de la aplicación
      </DialogTitle>
      <DialogContent className="p-6">
        <p className="mb-4">
          Hola <strong>{userName}</strong>, este es un espacio de gestión de maquinarias donde podrás ver la información de la maquinaria, registrarla y actualizarla. 
        </p>
        <p className="mb-4">
          También podrás ver distintos informes donde podrás ver, registrar y modificar inspecciones, documentos, mantenimiento preventivo, mantenimiento correctivo, carga de combustibles, entre otros.
        </p>
        <p className="mb-4">
          Si tienes alguna duda, comunícate con el administrador.
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="bg-blue-500 text-white hover:bg-blue-600">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoModal;
