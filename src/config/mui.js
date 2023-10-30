import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2a3958",
    },
    secondary: {
      main: "#ebeef3",
    },
    success: {
      contrastText: "#166534",
      main: "#dcfce7",
    },
    error: {
      main: "#FEE2E2",
      contrastText: "#991B1B",
    },
    warning: {
      main: "#FFEDD5",
      contrastText: "#9A3412",
    },
  },
  typography: {
    fontFamily: "Pretendard !important",
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});
