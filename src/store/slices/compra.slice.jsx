import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const compraSlice = createSlice({
    name: 'compraSlice',
    initialState: {},
    reducers: {
        setCompra:(state,action)=>{
            const Compra=action.payload
            return Compra
        }
    }
})
export const CompraPostThunk = (gmail) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://api-ropa1-uwg9-dev.fl0.io/carritos/compras',gmail,getConfig())
        .then(() => dispatch(setCompra()))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setCompra } = compraSlice.actions;

export default compraSlice.reducer;
