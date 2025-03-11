// app/layout.tsx
import { ReactNode } from "react";
// import { Provider } from "react-redux";
// import store from "../store/store";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Frontend App</title>
      </head>
      <body>
        {/* <Provider store={store}> */}
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
