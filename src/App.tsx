import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePesistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Global from "./styles/Global";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <Global />
      </div>
    </ThemeProvider>
  );
};

export default App;
