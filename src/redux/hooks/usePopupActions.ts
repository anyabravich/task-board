import { useDispatch } from "react-redux";
import { setOpenPopup } from "../slices/popupSlice";

export const usePopupActions = () => {
  const dispatch = useDispatch();
  return {
    togglePopup: (value: boolean) => dispatch(setOpenPopup(value)),
  };
};
