import { narBarHeight } from "@/constants/fixedConst";
import { UilAngleDown, UilShoppingCartAlt } from "@iconscout/react-unicons";
import { Badge, Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import SearchSection from "./SearchSection";
import UserSection from "./UserSection";

const Desktop = ({classes}) => {
	const [anchorEl, setAnchorEl] = useState(null);
    const [fixedHeader, setFixedHeader] = useState(false)
	const iconSectionRef = useRef(null);
    
	useEffect(() => {
		setAnchorEl(iconSectionRef.current);
        const handleScroll = (event) => {
            const currentScroll = document.documentElement.scrollTop
            setFixedHeader(currentScroll >= narBarHeight)
        }
        window?.addEventListener('scroll', handleScroll);
        return () => {
            window?.removeEventListener('scroll', handleScroll);
        };
	}, []);


	return (
		<Box className={clsx(classes.header, fixedHeader && classes.headerWhite)}>
			<Box component="header" className={classes.root}>
				<Container maxWidth="md" className={classes.container}>
					<Box className={classes.logo}>
				    	<Typography variant="body1">das</Typography>
					</Box>
					<Box className={classes.wrapperMenus}>
						<Box className={classes.menuItem} display="flex" alignItems="center">
							<Typography component="span" variant="h6">
								Collection
							</Typography>
							<UilAngleDown className={classes.arrow} />
							<Box className={classes.underLine} />
							<Box className={classes.detailMenu}>
								<Container maxWidth="lg">ádasdlkajsdkla</Container>
							</Box>
						</Box>
						<Box className={classes.menuItem} display="flex" alignItems="center">
							<Typography component="span" variant="h6">
								Collection
							</Typography>
							<UilAngleDown className={classes.arrow} />
							<Box className={classes.underLine} />
						</Box>
						<Box className={classes.menuItem} display="flex" alignItems="center">
							<Typography component="span" variant="h6">
								Collection
							</Typography>
							<UilAngleDown className={classes.arrow} />
							<Box className={classes.underLine} />
						</Box>
						<Box className={classes.menuItem} display="flex" alignItems="center">
							<Typography component="span" variant="h6">
								Collection
							</Typography>
							<UilAngleDown className={classes.arrow} />
							<Box className={classes.underLine} />
						</Box>
					</Box>
					<Box ref={iconSectionRef} className={classes.icons}>
						<SearchSection anchorEl={anchorEl} />
						<UserSection anchorEl={anchorEl} />
						<Tooltip title="Giỏ hàng">
							<Badge badgeContent={4} showZero color="primary">
								<IconButton>
									<UilShoppingCartAlt />
								</IconButton>
							</Badge>
						</Tooltip>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}

export default Desktop