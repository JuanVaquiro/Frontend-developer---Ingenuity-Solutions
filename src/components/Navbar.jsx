import { IconLogo } from '../assets/icons-group'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav max-w-screen-xl'>
      <div className='container-logo'>
        <IconLogo />
      </div>
      <div className='navbar-items'>
        <ul>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/'>THE CREW</a>
          </li>
          <li>
            <a href='/'>EVENTS</a>
          </li>
          <li>
            <a href='/'>WHAT`S NEW</a>
          </li>
          <li>
            <a href='/'>VIRTUAL OFFICE</a>
          </li>
          <li>
            <a href='/'>CONTACT</a>
          </li>
          <li className='container-btns-media'>
            <button>MARIA REINA PARISH</button>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar