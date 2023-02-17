import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home/Home";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Footer from "./componentes/Footer/Footer";
import { CartContainer } from "./componentes/CartContainer/CartContainer";
import Contacto from "./componentes/Contacto/Contacto";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contacto" element={<Contacto/>}></Route>
            <Route
              path="/Productos/:precioProducto"
              element={<ItemListContainer />}
            ></Route>
            <Route
              exact
              path="/Productos"
              element={<ItemListContainer />}
            ></Route>

            <Route
              path="/item/:productosId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
