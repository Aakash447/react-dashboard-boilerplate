import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#f29721",
    },
    secondary: {
      main: "#4cbb17",
    },
    text: {
      textPrimary: "#4f38bc",
    },

    background: {
      default: "#e4f0e2",
    },
  },

  typography: {
    fontFamily: ["Poppins", "Roboto"].join(","),
  },
});
export default theme;
