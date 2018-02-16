import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
  <section id="ContactUs">
  <div class="container">
  <h5 class="comp-title">Contact Us</h5>
  <h2>Delicious Flavour Of Autumn</h2>

  <div class="box">
  <div class="row">
  <div class="col-md-6">
  <div class="title">
  Philadelphia,Pa
  </div>
  <h6 class="Address">
  900 Bridge Street<br/>
  Summerdale,Pa 19124
  </h6>
  <p>
  <strong>email: </strong> <a href="mailto:@leftovers.com">leftovers.com</a>
  </p>

  </div>

  <div class="col-md-6">
  <h6>
  Phone:
  </h6>
  <div class="title">
  (267) - 642 - 9542
  </div>
  <h6>
  Lunch Service:
  </h6>
  <p>
  Friday, Saturday and Sunday<br/>
  from 12pm - 130pm
  </p>
  <h6>
  Dinner Service:
  </h6>
  <p>
  Daily<br/>
  from 6pm - 11pm
  </p>

  </div>
  </div>

  </div>

  </div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
