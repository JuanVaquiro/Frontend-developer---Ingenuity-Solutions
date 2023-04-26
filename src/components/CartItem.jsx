import PropTypes from 'prop-types';
import '../styles/CartItem.css'

// <div className='ProductItem'>
// <img src={url} alt="item-cart-events" />
// <h3>Event 1</h3>
// </div>

function CartItem({ url, title }) {
  return (
    <article className="ProductItem">
      <div
        id={url}
        className="container-item"
        title={`ver ${title}`}
        rel="preload noreferrer"
      >
        <h3 className="text-item">{title}</h3>
      </div>
    </article>
  )
}

CartItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default CartItem 