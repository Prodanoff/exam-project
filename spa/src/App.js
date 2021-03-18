
import './App.css';
import Header from './components/Header/Header'
import Articles from './components/Articles/Articles'
import Gallery from './components/Gallery/Gallery'
import Banner from './components/Banner/Banner'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Footer from './components/Footer/Footer'
import { Route, Link, NavLink, Switch } from 'react-router-dom'


function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Switch>
				<Route path="/Gallery" component={Gallery} />
				<Route path="/Login" component={Login} />
				<Route path="/Register" component={Register} />
				<Route path="/Articles" component={Articles} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
