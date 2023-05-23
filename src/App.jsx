import './App.css'
import NavbarComponent from './components/navbar'
import Characters from './components/Characters'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Cards from './components/Cards';
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
