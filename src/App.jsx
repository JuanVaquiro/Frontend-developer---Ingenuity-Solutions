import Navbar from "./components/Navbar"
import BannerSoundtrack from "./containers/BannerSoundtrack"
import BannerVideo from "./containers/BannerVideo"
import Events from "./containers/Events"
import Memories from "./containers/Memories"
import TheCrew from "./containers/TheCrew"

const App = () => {
  return (
    <>
      <Navbar />
      <BannerVideo />
      <Events />
      <TheCrew />
      <Memories />
      <BannerSoundtrack />
    </>
  )
}

export default App