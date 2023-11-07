import { createSlice } from '@reduxjs/toolkit';

export const createBankAccountSlice = createSlice({
    name: 'createBankAccountDialog',
    initialState: {
        isOpen: false
    },
    reducers: {
        setOpen: (state) => {
            state.isOpen = true;
        },
        setClose: (state) => {
            state.isOpen = false;
        }
    }
});
