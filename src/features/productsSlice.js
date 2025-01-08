import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
    status: 'idle',
    error: null,
    displayedCount: 8
}

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async () => {
        const response = await axios.get(
            `https://example.com/user`
        );
        return response.data
    }
);

// export const addProductAsync = createAsyncThunk(
//     'products/addProduct',
//     (productData) => {
//       const response = addProduct({...productData, imageUrl: productData.previewUrl || ''}); // add imageUrl if exist
//       return response;
//     }
//   );

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setDisplayedCount: (state, action) => {
            state.displayedCount = action.payload
        },
        addProduct: (state, action) => {
            state.items.push(action.payload)
        },
        updateProduct: (state, action) => {
            const { id, title, description, published, price } = action.payload;
            const isFound = state.items.find(note => note.id === id);

            if (isFound) {
                isFound.title = title;
                isFound.description = description;
                isFound.published = published;
                isFound.price = price
            }

        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(note => note.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'

            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null

            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message


            })
    }

});

export const selectAllproducts = state => state.products.items; /** список продуктов */
export const statusFetching = state => state.products.status;           /** статус */


export const { setDisplayedCount, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;