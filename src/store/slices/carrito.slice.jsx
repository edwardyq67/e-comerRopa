import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const carritoSlice = createSlice({
    name: 'carritoSlice',
    initialState: [],
    reducers: {
        setCarrito:(state,action)=>{
            const setCarro=action.payload
            return setCarro
        },
       
    }
})
export const getCarrito = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('http://localhost:8080/carrito',getConfig())
        .then((res) => dispatch(setCarrito(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const thunkPostCarrito = (carrito) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('http://localhost:8080/carrito',carrito,getConfig())
        .then(() => dispatch(getCarrito()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCarrito } = carritoSlice.actions;

export default carritoSlice.reducer;