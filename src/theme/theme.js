import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

//Color palette

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            bg: '#f7f7fc',
            blue: '#3085C3'
        },
        error: {
            main: red.A400
        }
    }
});

//Responsive typography

theme.typography.h1 = {
    fontSize: '2.5rem',               //Mobile size
    '@media (min-width:600px)': {     //Tablets and higher sizes
        fontSize: '4rem',
    }
};

theme.typography.h3 = {
    fontSize: '1.5rem',               //Mobile size
    '@media (min-width:600px)': {     //Tablets and higher sizes
        fontSize: '3rem',
    }
};

theme.typography.h4 = {
    fontSize: '1.3rem',               //Mobile size
    '@media (min-width:600px)': {     //Tablets and higher sizes
        fontSize: '1.6rem',
    }
};

theme.typography.h6 = {
    fontSize: '1rem',                 //Mobile size
    '@media (min-width:600px)': {     //Tablets and higher sizes
        fontSize: '1.3rem',
    }
};