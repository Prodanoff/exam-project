import './App.css';
import Header from './components/Header/Header'
import Articles from './components/Articles/Articles'
import Gallery from './components/Gallery/Gallery'
import Banner from './components/Banner/Banner'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Work from './components/Work/Work'
import Redact from './components/Work/Redact'
import About from './components/About/About'
import Details from './components/Details/Details'
import Footer from './components/Footer/Footer'
import Contacts from './components/About/Contacts'

import { Route, Switch, withRouter } from 'react-router-dom'
import { useState } from 'react'


function App() {
	const logState = useState()
	return (
		<div className="App">
			<Header logState={logState} />
			<Banner />


			<Switch>
				<Route path="/work/details/:id"
					render={(props) => (
						<Details {...props} logState={logState} />
					)} />
				<Route path="/work/delete/:id" component={Gallery} />
				<Route path="/work/redact/:id" component={Redact} />
				<Route path="/gallery/:category" component={Gallery} />
				<Route path="/login"
					render={(props) => (
						<Login {...props} logState={logState} />
					)}
				/>
				<Route path="/Contacts" component={Contacts} />
				<Route path="/register" component={Register} />
				<Route path="/articles" component={Articles} />
				<Route path="/addWork" component={Work} />
				<Route path="/About" component={About} />
				<Route path="/" component={Gallery} />

			</Switch>

			<Footer />
		</div>
	);
}

export default App;