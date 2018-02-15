import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
  <section id="SpecialMenu">
  <div class="container">
  <h5 class="comp-title">Special Menu</h5>
  <h2>Delicious Flavour Of Autumn</h2>
  <div class="row boxes">
  <div class="col-md-4">
  <div class="box">
  <div class="box-img">  <div class="price-circle">$25</div></div>

  <span class="title">Super BBQ Grill NO FUMA </span>
  <p class="details">Fried eggs, steak, papafritas or baked potatoes, side of vegetables</p>

  </div>
  </div>

  <div class="col-md-4">
  <div class="box">
  <div class="box-img">  <div class="price-circle">$25</div></div>

  <span class="title">Super BBQ Grill NO FUMA </span>
  <p class="details">Fried eggs, steak, papafritas or baked potatoes, side of vegetables</p>

  </div>


  </div>

  <div class="col-md-4">
  <div class="box">
  <div class="box-img">  <div class="price-circle">$25</div></div>

  <span class="title">Super BBQ Grill NO FUMA </span>
  <p class="details">Fried eggs, steak, papafritas or baked potatoes, side of vegetables</p>

  </div>
  </div>
  </div>
  <a href="#" class="link">View Full Menu </a>
  </div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
