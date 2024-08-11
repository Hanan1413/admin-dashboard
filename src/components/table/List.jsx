import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 1,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
    customerName: "John Doe",
    amount: 750,
    paymentMethod: "Credit Card",
    status: "Approved ",
    date: "2024-08-11",
  },
  {
    id: 2,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg",
    customerName: "Jane Smith",
    amount: 750,
    paymentMethod: "PayPal",
    status: "Pending",
    date: "2024-08-10",
  },
  {
    id: 3,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71My-kb2kIL._AC_UL320_.jpg",
    customerName: "Alice Johnson",
    amount: 750,
    paymentMethod: "Debit Card",
    status: "Approved",
    date: "2024-08-09",
  },
  {
    id: 4,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg",
    customerName: "Bob Brown",
    amount: 750,
    paymentMethod: "Bank Transfer",
    status: "Pending",
    date: "2024-08-08",
  },
];

import React from "react";

const List = () => {
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell"></TableCell>
              <TableCell className="tableCell">Customer Name</TableCell>
              <TableCell className="tableCell">date</TableCell>
              <TableCell className="tableCell">Amount ($)</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
                <TableCell className="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">{row.customerName}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.paymentMethod}</TableCell>
                <TableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
