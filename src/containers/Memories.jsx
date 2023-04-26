import IconSubtitle from "../components/IconSubtitle"
import BtnSecundary from "../components/BtnSecundary"
import Image1 from '../assets/imgs/21685935_1615511418509920_6491417614339878702_n.png'
import Image2 from '../assets/imgs/14322538_1245420755518990_4236770325307774581_n.png'
import Image3 from '../assets/imgs/40808616_2018763951517996_2574844232665661440_n.png'
import Image4 from '../assets/imgs/40903460_2018764138184644_8462339609081151488_n.png'
import Image5 from '../assets/imgs/41099653_2018780958182962_8517396395416616960_n.png'
import Image6 from '../assets/imgs/church.png'
import '../styles/Memories.css'

const Memories = () => {
  return (
    <section className="container-event">
      <IconSubtitle subtitle="Memories" />
      <div className='container-item-grid'>
        <div>
          <img src={Image1} alt="Memories" />
        </div>
        <div>
          <img src={Image2} alt="Memories" />
        </div>
        <div>
          <img src={Image3} alt="Memories" />
        </div>
        <div>
          <img src={Image4} alt="Memories" />
        </div>
        <div>
          <img src={Image5} alt="Memories" />
        </div>
        <div>
          <img src={Image6} alt="Memories" />
        </div>
      </div>
      <div>
        <BtnSecundary text="MORE MEMORIES"/>
      </div>
    </section>
  )
}

export default Memories