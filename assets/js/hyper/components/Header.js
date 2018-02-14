import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
  <header>
  <div class="container">
  <div class="logo">Logo</div>
  <nav>
  <a href="#">Menu</a>
  <a href="#">Party Platter</a>
  <a href="#">Locations</a>
  <a href="#">Reservations</a>
  <a href="#">Rewards</a>
  </nav>
</div>
  </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
