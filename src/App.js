import './App.css';
import {NavBar} from './components/Navbar/NavBar';
import {ItemListContainer } from './components/ItemListContainer/ItemListContainer '

export const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje="Pasando mensaje por props" />
    </div>
  )
}


