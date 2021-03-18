import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Articles from './components/Articles/Articles'
import Gallery from './components/Gallery/Gallery'
import Banner from './components/Banner/Banner'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Footer from './components/Footer/Footer'


function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Articles/>
			<Gallery/>
			<Login/>
			<Register/>
			<Footer/>
		</div>
	);
}

export default App;
