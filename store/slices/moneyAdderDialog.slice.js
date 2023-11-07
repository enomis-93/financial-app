import { createSlice } from '@reduxjs/toolkit';

export const moneyAdderDialogSlice= createSlice({
    name: 'moneyAdderDialog',
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

