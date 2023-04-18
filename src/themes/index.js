// import { createTheme } from '@material-ui/styles'
import { createTheme } from "@mui/material";
import componentOverrides from "./componentOverrides";
import themeTypography from "./typography";

const theme = () => {
	const themeOptions = {};
	return createTheme({
		palette: {
			primary: {
				main: "#000000",
			},
			secondary: {
				main: "#ffffff",
			},
            background: {
                default: '#f5f5f7',
            }
		},
        shape: {
            borderRadius: 2,
        },
		typography: themeTypography(themeOptions),
		components: componentOverrides(themeOptions),
	});
};

export default theme;
