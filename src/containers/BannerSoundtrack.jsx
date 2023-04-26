import Happy from '../assets/imgs/happy-african-man-smiling-listening-to-music-in-headphones (1).png'
import Playlist from '../assets/imgs/playlist.jpg'
import '../styles/BannerSoundtrack.css'

function BannerSoundtrack() {
  return (
    <section className='Banner'>
      <div className='gradient'>
        <div className='container-img'>
          <img
            src={Happy}
            alt="happy-african-man-smiling-listening-to-music-in-headphones"
          />
        </div>
        <div className='container-img-2'>
          <img
            className='playlist'
            src={Playlist}
            alt="playlist-spotify"
          />
        </div>
      </div>
    </section>
  )
}

export default BannerSoundtrack