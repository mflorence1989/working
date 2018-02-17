import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {

  var currentReview = function(){
    return(
      <div>
      <h5 class="comp-title">Reviews</h5>
      <h2>{state.reviewsData[state.reviewStatus.currentReview].company}</h2>
      <h4>"{state.reviewsData[state.reviewStatus.currentReview].highlights}"</h4>
      <p>{state.reviewsData[state.reviewStatus.currentReview].review} </p>
      <div class="author"><strong>{state.reviewsData[state.reviewStatus.currentReview].author}</strong> -<em>{state.reviewsData[state.reviewStatus.currentReview].authorInfo}</em></div>
      </div>
    )
  }
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
{currentReview()}
<div class="arrows">
<i class={`fa fa-arrow-left ${(state.reviewStatus.currentReview > 0) ? 'ready' :
''}` } aria-hidden="true"></i>
<i onclick={actions.reviewRight}
 class={`fa fa-arrow-right ${(state.reviewStatus.currentReview ==
(state.reviewsData.length - 1)) ? '' :
'ready'}`} aria-hidden="true"></i>
</div>
</div>
</div>
</div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
