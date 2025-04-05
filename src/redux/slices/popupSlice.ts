import { createSlice } from "@reduxjs/toolkit";

interface IPopup {
  openPopup: boolean;
}

const initialState: IPopup = {
  openPopup: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setOpenPopup: (state, action) => {
      state.openPopup = action.payload;
    },
  },
});

export const { setOpenPopup } = popupSlice.actions;
export default popupSlice.reducer;
