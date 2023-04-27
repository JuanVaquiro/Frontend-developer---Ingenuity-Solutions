import { IconComment, IconFavorite, IconOval } from '../assets/icons-group'
import { useWindowSize } from '../Hook/useWindowSize';
import Video from '../assets/video/Final2.mp4'
import MobileVideo from '../assets/video/Final.mp4'
import '../styles/BannerVideo.css'

const BannerVideo = () => {
  const size = useWindowSize();
  const isMobile = size.width ? size.width < 848 : false;
  
  return (
    <section className='main-banner'>
      <video
        className='videoDesktop'
        src={isMobile ? MobileVideo : Video}
        type="video/mp4"
        autoPlay
        loop
        preload='auto'
      />
      <div className='svg-oval'>
        <IconOval />
      </div>
      <div className='main-container'>
        <div className='container-bubble'>
          <button className='item-buble'>
            <IconComment />
          </button>
        </div>
        <div>
          <button className='item-favorite'>
            <div>
              <IconFavorite />
            </div>
            <span>
              JOIN US
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BannerVideo