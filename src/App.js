
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Home from './componentes/Home/Home'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>

      <NavBar />
      
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Home' element={<Home/>}/>
      <Route path='/Productos/:precioProducto' element={<ItemListContainer/>}></Route>
        <Route exact path='/Productos' element={<ItemListContainer/>}>
        </Route>
        
        <Route exact path='/Productos/:productosId' element={<ItemDetailContainer/>}/>
        </Routes>
        
      <Footer />
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
