import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home';
import Veg from './Veg';
import Nonveg from './Nonveg';
import Orders from './Orders';
import Cart from './Cart';
import Milk from './Sweets';
import Aboutus from './Aboutus';
import ContactUS from './ContactUs';
import Notfound from './Notfound';
import Login from './Login';
import { logout } from './Store';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCarrot, faDrumstickBite, faIceCream,
 faShoppingBag, faShoppingCart, faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import Footer from './Footer';



function App() {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  return (
    <BrowserRouter>
      <nav className='navbar'>
<Link to="/home" className="Linkstyle">
  <FontAwesomeIcon icon={faHouse} /> Home
</Link>
<Link to="/veg" className="Linkstyle">
  <FontAwesomeIcon icon={faCarrot} /> Veg Items
</Link>
<Link to="/nonveg" className="Linkstyle">
  <FontAwesomeIcon icon={faDrumstickBite} /> NonVeg Items
</Link>
<Link to="/milk" className="Linkstyle">
  <FontAwesomeIcon icon={faIceCream} /> Sweet Items
</Link>
<Link to="/orders" className="Linkstyle">
  <FontAwesomeIcon icon={faShoppingBag} /> Orders
</Link>
<Link to="/cart" className="Linkstyle">
  <FontAwesomeIcon icon={faShoppingCart} /> Cart <span>{totalItems}</span>
</Link>
<Link to="/aboutus" className="Linkstyle">
  <FontAwesomeIcon icon={faInfoCircle} /> About Us
</Link>
<Link to="/contactus" className="Linkstyle">
  <FontAwesomeIcon icon={faEnvelope} /> Contact Us
</Link>

        
        {isAuthenticated ? (
          <>
            <span className='welcome'>Welcome, {user}!</span>
            <button onClick={() => dispatch(logout())} className='logout'>Logout</button>
          </>
        ) : (
          <Link to="/login" className="Linkstyle">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <Footer />
  );
}

export default App;
