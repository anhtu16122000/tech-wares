import { UilBars, UilShoppingCartAlt } from "@iconscout/react-unicons";
import { AppBar, Badge, Box, IconButton, SwipeableDrawer, Toolbar, Tooltip, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SearchSection from "./SearchSection";



const Mobile = ({classes}) => {
    const [openDrawer, setOpenDrawer] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
    const iconSectionRef = useRef(null);
    
	useEffect(() => {
		setAnchorEl(iconSectionRef.current);
	}, []);

    const toggleOpenDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
  return (
    <AppBar color="secondary" position="static">
    <Toolbar>
 <IconButton
   disableRipple
   size="large"
   edge="start"
   color="inherit"
   aria-label="menu"
   sx={{ mr: 1 }}
   onClick={toggleOpenDrawer}
 >
   <UilBars />
 </IconButton>
 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
   News
 </Typography>
 <Box ref={iconSectionRef} className={classes.icons}>
               <SearchSection anchorEl={anchorEl} />
               <Tooltip title="Giỏ hàng">
                   <Badge badgeContent={4} showZero color="primary">
                       <IconButton>
                           <UilShoppingCartAlt />
                       </IconButton>
                   </Badge>
               </Tooltip>
           </Box>
</Toolbar>
<SwipeableDrawer
   anchor="left"
   open={openDrawer}
   onClose={toggleOpenDrawer}
   onOpen={toggleOpenDrawer}
>
    <Box>
        asdas
    </Box>
</SwipeableDrawer>
</AppBar>
  )
}

export default Mobile