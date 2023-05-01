import * as React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { getProductById, updateProduct } from "../api/productsAPI";

function EditProduct() {
  const { id } = useParams();

  
  const [product, setProduct] = useState({
    name: "",
    prod_type: "",
    price: 0,
    instock: 0,
    image: "",
  });

useEffect (()=>{
  getProductById(id).then((product) => {
    setProduct(product)
  });
},[id]);


  const onChangeHandler = (key, value) => {
    setProduct({ ...product, [key]: value });
  }

  const onSaveHandler = () => {
    updateProduct(id, product);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ width: "70%", marginTop: "10px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Edit Product
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="prod_type_label">Type</InputLabel>
            <Select
              required
              labelId="prod_type_label"
              name="prod_type"
              id="prod_type"
              defaultValue=''
              value={product.prod_type}
              variant="outlined"
              onChange={(e)=>onChangeHandler(e.target.name, e.target.value)}
            >
              <MenuItem key="1" value={"beauty"}>
                Beauty
              </MenuItem>
              <MenuItem key="2" value={"cleaning"}>
                Cleaning
              </MenuItem>
              <MenuItem key="3" value={"cosmetics"}>
                Cosmetics
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Product name"
            value={product.name}
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            onChange={(e)=>onChangeHandler(e.target.name, e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="outlined"
            value={product.price}
            onChange={(e)=>onChangeHandler(e.target.name, e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">USD</InputAdornment>
              ),
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="instock"
            name="instock"
            label="In Stock"
            fullWidth
            variant="outlined"
            value={product.instock}
            onChange={(e)=>onChangeHandler(e.target.name, e.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          gap={3}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Link to="/products">
            <Button variant="outlined">Cancel</Button>
          </Link>
          <Link to="/products">
            <Button variant="contained" onClick={onSaveHandler}>
              Save
            </Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default EditProduct;