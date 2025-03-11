// theme/index.ts
import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif"
  }
});

export default theme;