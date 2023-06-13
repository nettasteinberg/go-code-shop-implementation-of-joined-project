import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MyContext } from '../../MyContext';


function createData(title, description, price, category, image, rating) {
  return { title, description, price, category, image, rating };
}
// const rows = [
// createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// createData('Eclair', 262, 16.0, 24, 6.0),
// createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const rows1 = []
// console.log("create data ", createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 10))
// rows1.push(createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 10));
// console.log("rows1 ", rows1);
 

export const AdminPage = () => {
  const { products } = useContext(MyContext);
  
  const rows = [];
  products.map((p) => {
    console.log("p ", p);
    console.log("p.title ", p.title)
    rows.push(createData(p.title, p.description, p.price, p.category, p.image, p.rating))
  });

  return (
    // <React.Fragment>
    //   Admin
    // </React.Fragment>
    products && <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right"><img src={row.image} width={80} height={80}/></TableCell>
              <TableCell align="right">rate: {row.rating.rate} count: {row.rating.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminPage