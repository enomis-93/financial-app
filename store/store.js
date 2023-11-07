import { configureStore } from '@reduxjs/toolkit';

import { createBankAccountSlice } from './slices/createBankAccountDialog.slice';

const store = configureStore({
    reducer: {
        createBankAccountDialog: createBankAccountSlice.reducer
    }
});

export const { setOpen, setClose } = createBankAccountSlice.actions;
export const selectIsDialogOpen = (state) =>
    state.createBankAccountDialog.isOpen;
export default store;
