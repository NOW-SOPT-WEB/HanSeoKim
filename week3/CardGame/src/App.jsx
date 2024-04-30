import styled, { ThemeProvider } from "styled-components";
import MainLayout from "./components/MainLayout";
import theme from "./styles/theme";
import { Reset } from "styled-reset";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout></MainLayout>
    </ThemeProvider>
  );
}
export default App;
