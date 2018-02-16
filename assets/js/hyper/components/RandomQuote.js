import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
  <section id="RandomQuote" style={{
    background: 'url("http://www.spice-root.com/wp-content/uploads/2015/08/6817694-free-spices-wallpaper.jpg")'
  }}>
  <div class="container">
<h1>"Sometimes the best chef aint the fattest bitch in the room"</h1>
<span class="author"> - Papa De Fuego</span>
</div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
