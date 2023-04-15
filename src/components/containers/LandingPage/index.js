import MyImg from "@/components/common/MyImg";
import { UilAngleLeftB, UilAngleRightB } from "@iconscout/react-unicons";
import { Box, Container, IconButton, useMediaQuery, useTheme } from "@mui/material";
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
                        console.log('swiperRef?.current?.activeIndex === index', swiperRef?.current?.swiper.realIndex)
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
	);
};

export default LandingPage;
