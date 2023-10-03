import "./App.css";
import CityProvider from "./CityesProvider";
import Weather from "./Weather";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  let theme = createTheme({
    typography: "IBM",
  });

  return (
    <ThemeProvider theme={theme}>
      <CityProvider>
        <Weather />
      </CityProvider>
    </ThemeProvider>
  );
}

export default App;
