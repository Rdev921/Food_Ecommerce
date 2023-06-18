import './App.css';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import Checkout from './component/Checkout';
import Payment from './component/Payment';
import Confirmation from './component/Confirmation';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='cart' element={<Cart />} />
				<Route path='products' element={<Products />} />
				<Route path='products/:id' element={<SingleProduct />} />
				<Route path='*' element={<Error />} />
				<Route path="/checkout" element={<Checkout/>}/>
				<Route path="/payment" element={<Payment/>}/>
				<Route path="/confirmation" element={<Confirmation/>}/>
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
