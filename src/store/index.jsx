import { configureStore } from '@reduxjs/toolkit'
import  isLoading from './slices/isLoading.slice'
import homeSlice from './slices/home.slice'
import carritoSlice from './slices/carrito.slice'
import registroSlice from './slices/registro.slice'
import compraSlice from './slices/compra.slice'

export default configureStore({
    reducer: {
        isLoading:isLoading,
        homeSlice:homeSlice,
        carritoSlice:carritoSlice,
        registroSlice:registroSlice,
        compraSlice:compraSlice
    }
})
