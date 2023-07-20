import React from "react";
import classes from "./../table/Table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
    const rows =[
        {
            Image:"https://www.shutterstock.com/image-illustration/sports-hightop-sneakers-3d-render-260nw-2076784435.jpg",
            product:"Nick Snekers",
            name:"Quatity1",
            id:"46376",
            Price:"2,500",
            status: "Approved",
        },
        {
            Image:"https://cdn.shopify.com/s/files/1/0011/0162/7439/products/11black_fcaeee25-1593-4181-b91e-c62a29be5d2c_5000x.png",
            product:"Iphone 11",
            name:"Quatity2",
            id:"78648",
            Price:"300,203",
            status: "Pending",
        },
        {
            Image:"https://www.shutterstock.com/image-illustration/sports-hightop-sneakers-3d-render-260nw-2076784435.jpg",
            product:"Vic Snekers",
            name:"Quatity3",
            id:"46846",
            Price:"11,500",
            status: "Approved",
        }
    ]
    return (
        <TableContainer component={Paper} className={classes.table}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Product</TableCell>
                <TableCell className={classes.tableCell}>Order ID</TableCell>
                <TableCell className={classes.tableCell}>Price</TableCell>
                <TableCell className={classes.tableCell}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} >
                  <TableCell className={classes.tableCell} >
                    <div className={classes.cellWrapper} >
                       
                      <div>
                      <h3>{row.product}</h3>  
                       <p> {row.name}</p>
                      </div>
                   </div>
                  </TableCell>
                   <TableCell className={classes.tableCell}>{row.id}</TableCell>
                  <TableCell className={classes.tableCell}>{row.Price}</TableCell>
                  <TableCell className={`classes.status ${row.status}`}><span>{row.status}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}
export default List;