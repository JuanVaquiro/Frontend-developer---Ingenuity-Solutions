import Video from '../assets/video/Final2.mp4'
import '../styles/BannerVideo.css'

const BannerVideo = () => {
  return (
    <section>
      <video
        className='videoDesktop'
        src={Video}
        type="video/mp4"
        autoPlay
        loop
        preload='auto'
      />
    </section>
  )
}

export default BannerVideo