import {h, app} from 'hyperapp'
import Header from './Header.js'

export default function App({state, actions}) {
  return (
    <Header state={state} actions={actions}/>
  )
}

// <Button state={state} actions={actions}/>
