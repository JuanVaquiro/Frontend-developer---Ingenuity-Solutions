import Navbar from "./components/Navbar"
import BannerVideo from "./containers/BannerVideo"
import Events from "./containers/Events"
import TheCrew from "./containers/TheCrew"

const App = () => {
  return (
    <>
      <Navbar />
      <BannerVideo />
      <Events />
      <TheCrew />
    </>
  )
}

export default App