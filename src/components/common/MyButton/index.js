import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme, variant}) =>  {
    console.log('variant', variant)
    const styleOverrides = {
        "&.MuiButton-root": {
            boxShadow: "none",
            textTransform: "none",
        }
    }
    if(variant === 'outlined') {
        styleOverrides['&.MuiButton-root:hover'] = {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        }
    }

    return styleOverrides  
});
const MyButton = (props) => {
    return <StyledButton {...props}  />
}


export default MyButton;
