import { useSelector } from "react-redux";
import { selectOpenPopup } from "../store/popupSelectors";

export const usePopup = () => {
  const openPopup = useSelector(selectOpenPopup);
  return { openPopup };
};
