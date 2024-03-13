import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Esto es solo si quiero usar codigo del bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/form/Form';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/> 
      <Routes>
        <Route path='/' element={  <ItemListContainer greeting="Bienvenidos a mi app"/>} />
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoria:'/>}/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
