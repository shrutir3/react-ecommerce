import { extendTheme } from '@mui/material';

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: { main: '#3F51B5' },
                secondary: { main: '#009688' },
                background: { default: '#F5F5F7' },
            }
        },
        dark: {
            palette: {
                primary: { main: '#BAC3FF' },
                secondary: { main: '#C6C5D0' },
                background: { default: '#1B1B1F' },
            }
        }
    },
});

export default theme;