import './App.css';
import {NavBar} from './components/Navbar/NavBar';
import {Main} from './components/Main/Main'

export const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Main saludo="Buenass, este es un saludo enviado por parametros"/>
    </div>
  )
}


