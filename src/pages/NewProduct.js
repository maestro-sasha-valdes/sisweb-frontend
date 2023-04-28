import * as React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import {
  createProduct,
  getProductById,
  updateProduct,
} from "../api/productsAPI";

function NewProduct() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [prodType, setProdType] = useState("");
  const [price, setPrice] = useState(0.0);
  const [instock, setInstock] = useState(0.0);
  const [image, setImage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (id !== undefined) initFromProduct();
  },[]);


  const initFromProduct = () => {
    getProductById(id).then( product => {
      setName(product.name);
      setProdType(product.prod_type);
      setPrice(product.price);
      setInstock(product.instock);
      setImage(product.image);
      setIsUpdate(true);
    })
    
  };

  const onSaveHandler = () => {
    (isUpdate)
      ? updateProduct(id, { id, name, prod_type: prodType, price, instock, image })
      : createProduct({ name, prod_type: prodType, price, instock, image });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ width: "70%", marginTop: "10px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            New Product
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
              defaultValue={prodType}
              value={prodType}
              variant="outlined"
              onChange={(e) => setProdType(e.target.value)}
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
            value={name}
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={instock}
            onChange={(e) => setInstock(e.target.value)}
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

export default NewProduct;
