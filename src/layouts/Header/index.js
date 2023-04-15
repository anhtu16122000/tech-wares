import { useMediaQuery, useTheme } from "@mui/material";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import useStyles from "./useStyles";

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const downMd = useMediaQuery(theme.breakpoints.down('md'));

	return downMd ? <Mobile classes={classes} /> : <Desktop classes={classes} /> ;
};

export default Header;
