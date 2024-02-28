import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Esto es solo si quiero usar codigo del bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBar from './components/navbar/NavBar'
// import NavBarComun from './components/navbar/NavBarComun';
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  console.log('soy App y me renderice')
  return (

    <div>
      <NavBar/> 
      <ItemListContainer greeting="Bienvenidos a mi app"/>
    </div>
  );
}

export default App;
