import { createTheme } from "@mui/material";

//Color palette
export const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
            font: '#ffffff',
            highlight: '#00ffbb'
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