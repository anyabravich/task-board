import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyle } from "./utils/global-styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      Task
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
