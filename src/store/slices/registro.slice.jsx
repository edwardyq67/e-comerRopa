import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const registroSlice = createSlice({
    name: 'registroSlice',
    initialState: {},
    reducers: {
        setRegistro:(state,action)=>{
            const registro=action.payload
            return registro
        }
    }
})
export const postRegistroThunk = (informacion) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('http://localhost:8080/usuario',informacion)
        .then(() => dispatch(setRegistro()))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setRegistro } = registroSlice.actions;

export default registroSlice.reducer;
