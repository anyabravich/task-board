import { RootState } from "../store";

export const selectPopup = (state: RootState) => state.popup;

export const selectOpenPopup = (state: RootState) => state.popup.openPopup;
