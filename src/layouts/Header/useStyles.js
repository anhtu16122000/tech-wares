import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme = {}) => {
	return {
		root: {
			height: "73px",
			position: "relative",
		},
		popOverPaper: {
			padding: "20px",
			borderRadius: "1px",
		},
		detailMenu: {
			position: "fixed",
			backgroundColor: "pink",
			top: "73px",
			left: "0px",
			right: "0px",
			transform: "scaleY(0)",
		},
		inputRoot: {
			border: "1px solid #e7e7e7",
			padding: "8px 20px",
			width: "400px",
			outline: "0",
			background: "#f6f6f6",
			transition: `border ${theme?.transitions.duration.short / 1000}s`,
			"&:focus-within": {
				border: "1px solid #000000",
			},
		},
		inputInput: {
			padding: "0px",
		},
		container: {
			height: "100%",
			display: "flex",
		},
		logo: {
			margin: "auto 0",
		},
		wrapperMenus: {
			flex: 1,
			padding: "auto 0",
			display: "flex",
			justifyContent: "space-evenly",
		},
		arrow: {
			transition: `transform ${theme?.transitions.duration.short / 1000}s`,
		},
		menuItem: {
			paddingLeft: "5px",
			paddingRight: "5px",
			cursor: "pointer",
			position: "relative",
			"&:hover $arrow": {
				transform: "rotate(180deg)",
			},
			"&:hover  $underLine": {
				width: "100%",
			},
			"&:hover $detailMenu": {
				transition: `transform ${theme?.transitions?.duration.short / 1000}s`,
				transformOrigin: "top",
				transform: "scaleY(1)",
			},
		},
		underLine: {
			position: "absolute",
			backgroundColor: "black",
			bottom: "0px",
			left: "0px",
			right: "0px",
			height: "2px",
			width: "0%",
			transition: `width ${theme?.transitions.duration.standard / 1000}s`,
		},
		icons: {
			margin: "auto 0",
		},
	};
});

export default useStyles;
