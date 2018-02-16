import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
  <section id="Reviews">
  <div class="container">
  <div class="row">
  <div class="col-md-8 side-img">
  <div class="side-img">

  <img src="https://stjohnsmontgomery.org/wp-content/uploads/chef.gif"/>
</div>
  </div>
  <div class="col-md-4">
<h5 class="comp-title">Reviews</h5>
<h2>The Food Network</h2>
<h4>"Best Restaurant in Philadelphia area"</h4>
<p>1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway </p>
<div class="author"><strong>OG ROE</strong> -<em> Winner of the chef masters.</em></div>
<div class="arrows">
<i class="fa fa-arrow-left" aria-hidden="true"></i>
<i class="fa fa-arrow-right ready" aria-hidden="true"></i>
</div>
</div>
</div>

</div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
