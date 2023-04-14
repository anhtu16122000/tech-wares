import MyInput from "@/components/common/MyInput";
import { UilUser } from "@iconscout/react-unicons";
import { Divider, Grid, IconButton, Popover, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import useStyles from "./useStyles";

const UserSection = ({ anchorEl }) => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();

	const handleToggleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<Tooltip title="Tài khoản">
				<IconButton onClick={handleToggleOpen}>
					<UilUser />
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
							ĐĂNG NHẬP TÀI KHOẢN
						</Typography>
						<Typography variant="body2" align="center" color="#677279">
							Nhập email và mật khẩu của bạn:
						</Typography>
					</Grid>
					<Grid item>
						<Divider />
					</Grid>
					<Grid item>
						<MyInput label="Reddit" defaultValue="" id="reddit-input" variant="filled" sx={{ width: "300px" }} />
					</Grid>
				</Grid>
			</Popover>
		</>
	);
};

export default UserSection;
