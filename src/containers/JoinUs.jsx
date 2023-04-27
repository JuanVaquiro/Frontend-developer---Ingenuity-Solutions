import BtnPrimary from "../components/BtnPrimary"
import Communication from '../assets/imgs/online-communication.png'
import '../styles/JoinUs.css'

function JoinUs() {
  return (
    <section className="container-join">
      <article className="container-items-join">
        <div className='items-text-join'>
          <h2 className='title-section'><span>Join</span> us.</h2>
          <p>
            In the sea of life, there is nothing to fear if you have God as your captain. Join our crew!
          </p>
          <br />
          <form action="" className="form-join">
            <input
              type="text"
              id="helper-text"
              aria-describedby="fhelper-text-explanation"
              className="form-input"
              placeholder="Full Name"
            />
            <input
              type="email"
              id="helper-text"
              aria-describedby="fhelper-text-explanation"
              className="form-input"
              placeholder="Email Address"
            />
            <input
              type="number"
              id="helper-text"
              aria-describedby="fhelper-text-explanation"
              className="form-input"
              placeholder="Cell Phone Number"
            />
            <textarea
              type="text"
              id="helper-text"
              aria-describedby="fhelper-text-explanation"
              className="form-input"
              placeholder="Message"
            />
          </form>
          <div className='item-btn'>
            <BtnPrimary text='SENT' />
          </div>
        </div>
        <div>
          <img className="img-join" src={Communication} alt="img" />
        </div>
      </article>
    </section>
  )
}

export default JoinUs