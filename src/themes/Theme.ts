import { ThemeOptions, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

//Muda a cor e fonte do botão de entrar
export const obj: ThemeOptions = {
    palette: {
        primary: {
            main: grey[900],
            dark: grey[900],
            light: grey[900],
        },
    },
    typography: {
        fontFamily: "Roboto Slab",
    },
};

export const mainTheme = createTheme(obj);