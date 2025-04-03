const getStatusBackground = (status: string, theme: any) => {
  switch (status) {
    case "completed":
      return theme.colors.green;
    case "progress":
      return theme.colors.orange;
    case "wontdo":
      return theme.colors.red;
    default:
      return theme.colors.gray;
  }
};

export default getStatusBackground;
