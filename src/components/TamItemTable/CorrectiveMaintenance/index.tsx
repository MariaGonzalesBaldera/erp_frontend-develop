import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
  price: string
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "Pepito Juarez",
        customerId: "ninguna",
        amount: "8:00",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Operador</TableCell>
                    <TableCell>Observaciones</TableCell>
                    <TableCell align="right">Inicio de conducción</TableCell>
                    <TableCell align="right">Fin de conducción</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {"10:00"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("00001", "detalle detalle", "22/10/2024", "2400", "Proyecto Antártida", "3.99"),
  createData("Ice cream sandwich", "237", "9.0", "37", "4.3", "4.99"),
  createData("Eclair", "262", "16.0", "24", "6.0", "3.79"),
  createData("Cupcake", "305", "3.7", "67", "4.3", "2.5"),
  createData("Gingerbread", "356", "16.0", "49", "3.9", "1.5"),
];

const CorrectiveMaintenance: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <div
        style={{
          height: "auto",
          width: "100%",
          maxHeight: "400px",
          overflowX: "auto",
        }}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Fecha Mant.</TableCell>
              <TableCell align="right">Cantidad pagada</TableCell>
              <TableCell align="right">Nombre del proyecto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default CorrectiveMaintenance;
