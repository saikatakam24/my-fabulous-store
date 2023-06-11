import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableProps } from "../../models/table.interface";
import { Product } from "../../models/product.interface";

type TableData = Product;

export const TableUI = (props: TableProps<TableData>) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map(({ label, name }) => (
              <TableCell key={name} component="th" scope="column">
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell component="th" scope="column">
                {row.price}
              </TableCell>
              <TableCell component="th" scope="column">
                {row.category}
              </TableCell>
              <TableCell component="th" scope="column">
                {row.description}
              </TableCell>
              <TableCell component="th" scope="column">
                {row.rating}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
