import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { getAllProducts, deleteProduct } from "../api/productsAPI";


function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  function onDeleteHandler(event, id) {
    deleteProduct(id).then((res) => {
      if (res === null) {
        getAllProducts().then((data) => setProducts(data));
      }
    });
  }

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ width: "70%", marginTop: "10px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            All Products
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          gap={3}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Link to="/new-product">
            <Button variant="contained">Add product</Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell align="right">Price(USD)</TableCell>
                  <TableCell align="right">Quantity(U)</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography variant="body" textTransform="capitalize">
                        {product.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body" textTransform="capitalize">
                        {product.prod_type}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.instock}</TableCell>
                    <TableCell align="right">
                      <Link to= {`/edit-product/${product.id}`}>
                        <Button variant="outlined">Modify</Button>
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        onClick={(event) => onDeleteHandler(event, product.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ListProducts;
