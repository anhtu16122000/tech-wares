import MyImg from "@/components/common/MyImg";
import { UilAngleLeftB, UilAngleRightB } from "@iconscout/react-unicons";
import { Box, IconButton } from "@mui/material";
import { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
	const swiperRef = useRef(null);

	console.log("swiperRef", swiperRef);

	const URL = [
		"https://theme.hstatic.net/1000378223/1000914670/14/slide_2_img.jpg?v=932",
		"https://theme.hstatic.net/1000378223/1000914670/14/slide_3_img.jpg?v=932",
	];

	return (
		<Box>
			<Swiper
				ref={swiperRef}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={swiper => console.log(swiper)}
			>
				{URL.map((url, index) => {
					return (
						<SwiperSlide key={index}>
							<Box sx={{ paddingTop: "39%" }}>
								<MyImg src={url} layout="fill" />
							</Box>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Box>
				<IconButton>
					<UilAngleLeftB />
				</IconButton>
			</Box>
			<Box>
				<IconButton>
					<UilAngleRightB />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Index;
