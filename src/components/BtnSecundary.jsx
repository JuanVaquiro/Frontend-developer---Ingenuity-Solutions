
import PropTypes from 'prop-types';
import '../styles/BtnSecundary.css'

function BtnSecundary({ text }) {
  return (
    <button className='BtnSecundary'>
      {text}
    </button>
  )
}

BtnSecundary.propTypes = {
  text: PropTypes.string.isRequired
}

export default BtnSecundary