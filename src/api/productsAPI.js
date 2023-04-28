import api from '.';


//GET ALL
export const getAllProducts = async () => {
    try {
        const res = await api.get(`/product`);
        const products = await res.data.payload;
        return products;
    } catch (err) {
        console.log(err)
    }

}

//CREATE
export const createProduct = async (product) => {
    try {
        const res = await api.post(`/product`, product);
        const action = await res.data.payload;
        return action;
    } catch (err) {
        console.log(err)
    }

}

//DELETE
export const deleteProduct = async (id) => {
    try {
        const res = await api.delete(`/product/${id}`);
        const action = await res.data.payload;
        return action;
    } catch (err) {
        console.log(err)
    }

}

// GET ONE BY ID
export const getProductById = async (id) => {
    try {
        const res = await api.get(`/product/${id}`);
        const product = await res.data.payload;
        return product;
    } catch (err) {
        console.log(err)
    }

}


//UPDATE
export const updateProduct = async (id, producto) => {
    try {
        const res = await api.patch(`/product/${id}`, producto);
        const product = await res.data.payload;
        return product;
    } catch (err) {
        console.log(err)
    }
}


