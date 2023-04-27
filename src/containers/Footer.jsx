
import { IconEmail, IconFacebook, IconInstagram, IconLogo, IconTelephone } from '../assets/icons-group'
import BtnPrimary from '../components/BtnPrimary'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <section className='container-footer'>
      <div className='items-footer'>
        <div className='container-abaut'>
          <IconLogo />
          <p>
            Follow us on our social networks and don`t <br /> miss our latest news and events.
          </p>
        </div>
        <div className='container-icon-media'>
          <div className='icon-contact'>
            <div>
              <IconTelephone /> +57 (322) 374 6739
            </div>
            <div>
              <IconEmail /> servicio@lurdes.co
            </div>
          </div>
          <div className='icon-social-media'>
            <button>
              <IconInstagram />
            </button>
            <button>
              <IconFacebook />
            </button>
          </div>
        </div>
        <div className='email-footer'>
          <label
            htmlFor=""
          >
            SUBSCRIBE TO OUR NEWSLETTER!
          </label>
          <input
            type="email"
            id="helper-text"
            aria-describedby="fhelper-text-explanation"
            className="form-input"
            placeholder="Your Email"
          />
          <BtnPrimary text='SEND' />
        </div>
      </div>

      <div className='terms-conditions'>
        <span>
          Terms & Conditions | Privacy
          <br />
          Policy © Copyright 2020 - 2021 Ingenuity & Solutions LLC All Rights Reserved.
        </span>
      </div>
    </section>
  )
}

export default Footer