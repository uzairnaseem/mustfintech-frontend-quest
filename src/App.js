import Member from "./pages/Member";
import "../src/styles/App.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/mui";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Member />
      </ThemeProvider>
    </div>
  );
}

export default App;
