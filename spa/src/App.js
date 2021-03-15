import logo from './logo.svg';
import style from './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Articles from './components/Articles/Articles'


function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Articles/>
		</div>
	);
}

export default App;
