
import './App.css';
import Header from './components/Header/Header'
import Articles from './components/Articles/Articles'
import Gallery from './components/Gallery/Gallery'
import Banner from './components/Banner/Banner'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Work from './components/Work/Work'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import { Route, Link, NavLink, Switch, Router } from 'react-router-dom'


function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
				<Switch>
				<Route path="/gallery" component={Gallery} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/articles" component={Articles} />
				<Route path="/work"  component={Work}/>
				<Route path="/About" component={About}/>
				<Route path="/" component={Banner} />
				</Switch>
			<Footer />
		</div>
	);
}

export default App;
