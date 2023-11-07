import { configureStore } from '@reduxjs/toolkit';

import { createBankAccountSlice } from './slices/createBankAccountDialog.slice';
import {moneyAdderDialogSlice} from './slices/moneyAdderDialog.slice'

const store = configureStore({
    reducer: {
        createBankAccountDialog: createBankAccountSlice.reducer,
        moneyAdderDialog: moneyAdderDialogSlice.reducer
    }
});
// actions
export const { setOpen, setClose } = createBankAccountSlice.actions;
export const selectIsDialogOpen = (state) =>
    state.createBankAccountDialog.isOpen;
export const moneyAdderActions = moneyAdderDialogSlice.actions;    
export default store;
