import PropTypes from 'prop-types';
import { IconLogoSingle } from '../assets/icons-group'
import '../styles/IconSubtitle.css'

function IconSubtitle({ subtitle }) {
  return (
    <div className='container-iconSubtitle'>
      <IconLogoSingle />
      <h2>{subtitle}</h2>
    </div>
  )
}

IconSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired
}

export default IconSubtitle

