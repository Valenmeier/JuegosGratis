import './App.css';
import {NavBar} from './components/Navbar/NavBar';
import {Main} from './components/Main/Main'

export const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Main titulo="Juegos"/>
    </div>
  )
}


