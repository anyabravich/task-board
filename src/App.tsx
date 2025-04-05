import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyle } from "./utils/global-styles";
import Board from "./components/Board";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Board />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
