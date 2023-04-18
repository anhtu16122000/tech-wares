import MyButton from "@/components/common/MyButton";
import MyImg from "@/components/common/MyImg";
import CardProductY from "@/components/web/CardProductY";
import { UilAngleLeftB, UilAngleRightB } from "@iconscout/react-unicons";
import { Box, Container, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useStyles from "./useStyles";

const LandingPage = () => {
	const swiperRef = useRef(null);
    const classes = useStyles();
    const theme = useTheme()
    const downXL = useMediaQuery(theme.breakpoints.down('lg'))
    const [indexSwiper, setIndexSwiper] = useState()
    const handlePrevSlide = () => {
        if (swiperRef.current !== null) {
          swiperRef.current.swiper.slidePrev();
        }
      };
    
      const handleNextSlide = () => {
        if (swiperRef.current !== null) {
          swiperRef.current.swiper.slideNext();
        }
      };
	const URL = [
		"https://theme.hstatic.net/1000378223/1000914670/14/slide_2_img.jpg?v=932",
		"https://theme.hstatic.net/1000378223/1000914670/14/slide_3_img.jpg?v=932",
	];

	return (
		<Box sx={{backgroundColor: theme.palette.background.default}}>
		    <Container disableGutters maxWidth="xl" className={classes.root}>
    			<Swiper
                    loop
    				ref={swiperRef}
    				spaceBetween={50}
    				slidesPerView={1}
    				onSlideChange={swiper => {
                        setIndexSwiper(swiper.realIndex)
                    }}
    				onSwiper={swiper => {
                        setIndexSwiper(swiper.realIndex)
                    }}
    			>
    				{URL.map((url, index) => {
    					return (
    						<SwiperSlide key={index}>
    							<Box sx={{ aspectRatio: "64/25" }}>
    								<MyImg src={url} layout="fill" />
    							</Box>
    						</SwiperSlide>
    					);
    				})}
    			</Swiper>
    			<Box className={classes.prevBtn}>
    				<IconButton onClick={handlePrevSlide}>
    					<UilAngleLeftB size={downXL ? 15 : 20} />
    				</IconButton>
    			</Box>
    			<Box className={classes.nextBtn}>
    				<IconButton onClick={handleNextSlide}>
    					<UilAngleRightB size={downXL ? 15 : 20}  />
    				</IconButton>
    			</Box>
                <Box className={classes.navigation}>
                    <ul>
                        {URL.map( (url, index) => {
                            return <IconButton disableTouchRipple onClick={() => {
                                if (swiperRef.current !== null) {
                                    swiperRef.current.swiper.slideTo(index);
                                  }
                            }}>
                                <li className={indexSwiper === index && classes.activeDotSlider} />
                            </IconButton>
                        })}
                    </ul>
                </Box>
    		</Container>
            <Container sx={{paddingTop: 3}} maxWidth="lg">
             <Grid container rowSpacing={3}>
                  <Grid rowSpacing={4} item container>
                       <Grid item container rowSpacing={4}>
                            <Grid xs={12} item container columnSpacing={3} rowSpacing={2}>
                                <Grid lg={6} xs={12} item>
                                    <Box sx={{overflow:'hidden'}}>
                                        <Box className={classes.thumbnail} >
                                            <MyImg  src="https://theme.hstatic.net/1000378223/1000914670/14/categorybanner_1_img.jpg?v=932" fill />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid lg={6} xs={12} item>
                                    <Box sx={{overflow:'hidden'}}>
                                        <Box className={classes.thumbnail} >
                                            <MyImg src="https://theme.hstatic.net/1000378223/1000914670/14/categorybanner_2_img.jpg?v=932" fill />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                           <Grid xs={12} item>
                                <Typography variant="h5" align="center" fontWeight="bold">Ốp lưng nè</Typography>
                           </Grid>
                            <Grid xs={12} item container columnSpacing={2} spacing={4}>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                            </Grid>
                       </Grid>
                      <Grid item container justifyContent="center">
                            <Grid>
                                <MyButton variant="outlined" color="primary" endIcon={<UilAngleRightB/>}>
                                    Xem chi tiết
                                </MyButton>
                            </Grid>
                      </Grid>
                  </Grid>
                  <Grid rowSpacing={4} item container>
                       <Grid item container rowSpacing={4}>
                           <Grid xs={12} item>
                                <Typography variant="h5" align="center" fontWeight="bold">Case Airpod nè</Typography>
                           </Grid>
                            <Grid xs={12} item container columnSpacing={2} spacing={4}>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                                <Grid xl={2.4} lg={3} sm={4} xs={6} item>
                                    <CardProductY/>
                                </Grid>
                            </Grid>
                       </Grid>
                      <Grid item container justifyContent="center">
                            <Grid>
                                <MyButton variant="outlined" color="primary" endIcon={<UilAngleRightB/>}>
                                    Xem chi tiết
                                </MyButton>
                            </Grid>
                      </Grid>
                  </Grid>
             </Grid>
            </Container>
		</Box>
	);
};

export default LandingPage;
