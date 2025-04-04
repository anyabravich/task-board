import Check from "./Check";
import Completed from "./Completed";
import Plus from "./Plus";
import Progress from "./Progress";
import Trash from "./Trash";
import { IIcons } from "./types";
import Wontdo from "./Wontdo";

const Icons: IIcons = {
  progress: Progress,
  completed: Completed,
  wontdo: Wontdo,
  plus: Plus,
  check: Check,
  trash: Trash,
};

export default Icons;
