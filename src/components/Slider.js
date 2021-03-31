import { Swiper, SwiperSlide } from 'swiper/react'
import SwipperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
const urls = [
  'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg',
  'https://image.shutterstock.com/image-photo/waves-water-river-sea-meet-260nw-1529923664.jpg',
  'https://image.shutterstock.com/image-photo/show-dog-breed-beagle-on-260nw-1695233041.jpg',
  'https://cdn.stocksnap.io/img-thumbs/280h/bird-perched_HMXC4HH8RZ.jpg',
]
SwipperCore.use([Navigation, Pagination])
export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      slidesPerView={3}
      spaceBetween={1}
      navigation
      pagination
    >
      {urls.map((url, i) => (
        <SwiperSlide key={i}>
          <img src={url} alt='image icon' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
