import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
  <section id="Reviews">
  <div class="container">
  <div class="title">
  <h5>
  Welcome
  </h5>
  <h1>
  LEFTOVERS
  </h1>
  </div>

  <div class="contact-info">
  <div class="container">
  <div class="booking"> Book Table Directly </div>
  <h2>(718) - 642 - 9542</h2>
  <div class="hours">
  Opening Hours <strong> Mon - Fri:</strong> 9am -9pm
  <strong> Weekend: </strong> 9am -1am
  </div>
  </div>
  </div>
</div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
