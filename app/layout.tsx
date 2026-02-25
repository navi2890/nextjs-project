"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "../app/globals.css";
import "devextreme/dist/css/dx.light.css";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
