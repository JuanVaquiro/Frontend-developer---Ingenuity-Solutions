import { IconLogo, IconInstagram, IconFacebook } from '../assets/icons-group'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
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
          <li className='container-btns'>
            <button
              type='button'
              className='btn-secundary'>
              MARIA REINA PARISH
            </button>
            <div className='btns-social-media'>
              <button>
                <IconInstagram />
              </button>
              <button>
                <IconFacebook />
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div className='menu-movil'>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffff" viewBox="0 0 256 256"><path d="M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"></path></svg>
      </div>

    </nav>
  )
}

export default Navbar