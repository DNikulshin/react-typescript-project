import { configureStore } from '@reduxjs/toolkit'
import { erpApi } from './erp/erp.api'

export const store = configureStore({
    reducer: {
        [erpApi.reducerPath]: erpApi.reducer
    }
})