import CartItem from '../components/CartItem'
import IconSubtitle from '../components/IconSubtitle'
import BtnPrimary from '../components/BtnPrimary'
import '../styles/Events.css'

const Events = () => {
  return (
    <section className="container-event">
      <IconSubtitle subtitle="Events" />
      <div className='container-item-cart'>
        <CartItem url='event1' title='EVENT 1' />
        <CartItem url='event2' title='EVENT 2' />
        <CartItem url='event3' title='EVENT 3' />
        <CartItem url='event4' title='EVENT 4' />
      </div>
      <BtnPrimary text='MORE EVENTS' />
      <span>
        Let`s have fun, join us in our events. Find out more here.
      </span>
    </section>
  )
}

export default Events