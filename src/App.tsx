import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyle } from "./utils/global-styles";
import Board from "./components/Board";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Board />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
