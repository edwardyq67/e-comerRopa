import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';


export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: [],
    reducers: {
        setHome:(state,action)=>{
            const sethome=action.payload
            return sethome
        }
    }
})
export const getProducthunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('http://localhost:8080/ropas')
        .then((res) => dispatch(setHome(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const filterRopaVersatil = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`http://localhost:8080/ropas/?versatilId=${id}`)
        .then(res => dispatch(setHome(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const filterRopaGenero = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`http://localhost:8080/ropas/?generoId=${id}`)
        .then(res => dispatch(setHome(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const colorThunk = (color) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`http://localhost:8080/ropas/?color=${color}`)
        .then((res) => dispatch(setHome(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setHome } = homeSlice.actions;

export default homeSlice.reducer;
