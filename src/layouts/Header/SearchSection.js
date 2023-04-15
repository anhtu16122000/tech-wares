import { UilSearch } from "@iconscout/react-unicons";
import { Divider, Grid, IconButton, InputBase, Popover, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import useStyles from "./useStyles";

const SearchSection = ({ anchorEl = null }) => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();

	const handleToggleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<Tooltip title="Tìm  kiếm">
				<IconButton onClick={handleToggleOpen}>
					<UilSearch />
				</IconButton>
			</Tooltip>
			<Popover
				classes={{ paper: classes.popOverPaper }}
				open={open}
				anchorEl={anchorEl}
				onClose={handleToggleOpen}
				marginThreshold={70}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Grid container rowSpacing={2} direction="column">
					<Grid item>
						<Typography variant="subtitle1" fontWeight="bold" align="center">
							TÌM KIẾM
						</Typography>
					</Grid>
					<Grid item>
						<Divider />
					</Grid>
					<Grid item>
						<InputBase
							classes={{ root: classes.inputRoot, input: classes.inputInput }}
							placeholder="Tìm kiếm sản phẩm..."
							endAdornment={<UilSearch />}
						/>
					</Grid>
					<Grid item>
						<Typography variant="body2">Không có sản phẩm nào...</Typography>
					</Grid>
				</Grid>
			</Popover>
		</>
	);
};

export default SearchSection;
