const getBackgroundColor = (status: string, theme: any) => {
  switch (status) {
    case "completed":
      return theme.colors.lightGreen;
    case "progress":
      return theme.colors.yellow;
    case "wontdo":
      return theme.colors.lightRed;
    default:
      return theme.colors.gray;
  }
};

export default getBackgroundColor;
