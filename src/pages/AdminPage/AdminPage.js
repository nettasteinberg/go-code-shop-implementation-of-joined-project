import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MyContext } from '../../MyContext';
import { GET_OR_DELETE_PRODUCT_BY_ID } from '../../constants/api';


function createData(title, description, price, category, image, rating, id) {
  return { title, description, price, category, image, rating, id };
}

export const AdminPage = ( { fetchProducts }) => {
  const { products } = useContext(MyContext);

  const rows = [];
  products.map((p) => {
    rows.push(createData(p.title, p.description, p.price, p.category, p.image, p.rating, p._id))
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
            <TableCell align="left">Remove fo DB</TableCell>
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
              <TableCell align="right"><img src={row.image} width={80} height={80} /></TableCell>
              <TableCell align="right">rate: {row.rating.rate} count: {row.rating.count}</TableCell>
              <TableCell><button onClick={async () => {
                try {
                  const response = await fetch(`${GET_OR_DELETE_PRODUCT_BY_ID}${row.id}`, { method: 'DELETE' }, { mode: "cors"});
                  const data = await response.json();
                  fetchProducts();
                } catch (e) {
                  console.log(e.message);
                }
              }}>Remove</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminPage