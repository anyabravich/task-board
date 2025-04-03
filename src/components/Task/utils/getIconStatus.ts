import Icons from "../../Icons";

const getIconStatus = (status: string) => {
  switch (status) {
    case "completed":
      return Icons.completed;
    case "progress":
      return Icons.progress;
    case "wontdo":
      return Icons.wontdo;
    default:
      return Icons.progress;
  }
};

export default getIconStatus;
