
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import PhotoComponent from './Components/PhotoComponent/PhotoComponent'; // Import du composant
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import banner_chaussures from './Components/Assets/banner_chaussures.jpeg';
import banner_chemises from './Components/Assets/banner_chemises.jpeg';
import banner_pontalons from './Components/Assets/banner_pontalons.jpeg';
import banner_djackets from './Components/Assets/banner_djackets.jpeg';
import banner_accessoires from './Components/Assets/banner_accessoires.jpeg';
import Cart from './Pages/Cart';
import NousContacter from './Pages/NousContacter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          {/* <Route path='/chaussures' element={<ShopCategory banner={banner_chaussures} Category="chaussures" />} />
          <Route path='/chemises' element={<ShopCategory banner={banner_chemises} Category="chemises" />} />
          <Route path='/pontalons' element={<ShopCategory banner={banner_pontalons} Category="pontalons" />} /> */}
          <Route path='/chemises' element={<ShopCategory banner={banner_chemises} />} />
          <Route path='/chaussures' element={<ShopCategory banner={banner_chaussures} />} />
          <Route path='/pontalons' element={<ShopCategory banner={banner_pontalons} />} />
          <Route path='/djackets' element={<ShopCategory banner={banner_djackets} />} />
          <Route path='/accessoires' element={<ShopCategory banner={banner_accessoires} />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<LoginSignup />} />
          <Route path='/nous-contacter' element={<NousContacter />} />
        </Routes>
        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
// la ligne 24:   <PhotoComponent />  Pour importer la couverture pour tout le site. 