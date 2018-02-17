export const actions = {
  reviewRight,
  intro,
  showMenu
}

function reviewRight (state, actions) {
  return (
    {reviewStatus:{
      currentReview: state.reviewStatus.currentReview + 1
    }}
  )
}

function showMenu(){
}

function intro(state, actions){
  console.log('Just ran my first action' )
  return (
    {count: state.count + 1}
  )
}
