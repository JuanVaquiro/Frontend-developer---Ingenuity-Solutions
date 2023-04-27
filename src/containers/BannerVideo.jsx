import { IconComment, IconFavorite, IconOval } from '../assets/icons-group'
import Video from '../assets/video/Final2.mp4'
import '../styles/BannerVideo.css'

const BannerVideo = () => {
  return (
    <section className='main-banner'>
      <video
        className='videoDesktop'
        src={Video}
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