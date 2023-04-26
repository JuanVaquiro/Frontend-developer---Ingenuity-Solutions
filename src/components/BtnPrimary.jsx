
import PropTypes from 'prop-types';
import '../styles/BtnPrimary.css'

function BtnPrimary({ text }) {
  return (
    <button className='BtnPrimary'>
      {text}
    </button>
  )
}

BtnPrimary.propTypes = {
  text: PropTypes.string.isRequired
}

export default BtnPrimary