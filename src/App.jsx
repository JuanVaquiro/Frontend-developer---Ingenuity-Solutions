import Navbar from "./components/Navbar"
import BannerSoundtrack from "./containers/BannerSoundtrack"
import BannerVideo from "./containers/BannerVideo"
import Events from "./containers/Events"
import Footer from "./components/Footer"
import JoinUs from "./containers/JoinUs"
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
      <JoinUs />
      <Footer />
    </>
  )
}

export default App