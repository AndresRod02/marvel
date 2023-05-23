import './App.css'
import Characters from './components/Characters'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Cards from './components/Cards';
import NavbarComponent from './components/Navbar'
function App() {


  return (
    <div>
      <NavbarComponent/>
      <Cards/>
      <Characters/>
    </div>
  )
}

export default App
