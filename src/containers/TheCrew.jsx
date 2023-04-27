import BtnPrimary from '../components/BtnPrimary'
import '../styles/TheCrew.css'
import TheCrewImg from '../assets/imgs/40903460_2018764138184644_8462339609081151488_n.png'
import { IconGroup, IconGroups, IconSentimentSatisfied } from '../assets/icons-group'

function TheCrew() {
  return (
    <section className="container-the-crew">
      <article className="container-items-the-crew">
        <div className='items-text'>
          <h2 className='title-section'><span>The</span> crew</h2>
          <p>The Catholic community at Trinity participates in the sacramental life of the church and serves actively as a partner in community building and interreligious dialogue to promote understanding and tolerance on campus. </p>
          <br />
          <p>Roman Catholic Campus Ministry is sponsored by the Archdiocese of Hartford Campus Ministry Office and Trinity College’s Office of Spiritual and Religious Life. It brings a vitally important dimension to life at Trinity College.</p>
          <div className='item-btn'>
            <BtnPrimary text='LEARN MORE' />
          </div>
        </div>
        <div className='item-img'>
          <img src={TheCrewImg} alt="img" />
        </div>
      </article>
      <div className='container-members'>
        <div className='members-item'>
          <IconSentimentSatisfied />
          <h3>165</h3>
          <p>Happy freshman <br />  members</p>
        </div>
        <div className='members-item-2'>
          <IconGroup />
          <h3>13</h3>
          <p>Wise Senior members</p>
        </div>
        <div className='members-item-3'>
          <IconGroups />
          <h3>173</h3>
          <p>The whole crew</p>
        </div>
      </div>
    </section>
  )
}

export default TheCrew