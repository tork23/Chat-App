// Routes
import Router from "./routes";
// Theme
import ThemeProvider from "./theme";
// Components
import ThemeSettings from "./components/settings";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
