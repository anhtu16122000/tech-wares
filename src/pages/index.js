import { Box } from "@mui/material"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

const Index = () => {
  const swiperRef = useRef(null)
  const URL = [

  ]

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Box>ádasd</Box>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default Index