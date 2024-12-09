import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { build } from "vite";

const initialState = {
    items: [],
    status: 'idle',
    error: null,
    displayedCound: 8
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', 
    async (count) => {
        const response = await axios.get(
        `https://example.com/user`
        );
        return response.data
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setDisplayedCount: (state, action) => {
            state.displayedCound = action.payload
        },
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

export const { setDisplayedCount } = productsSlice.actions;
export default productsSlice.reducer;