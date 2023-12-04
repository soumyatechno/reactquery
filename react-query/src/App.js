import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home.page';
import Superheroes from './components/superheroes.page';
import Rqsuperheroes from './components/Rqsuperheroes.page';

function App() {
	return (
		<div className="App">
			<ul className="conatiner">
				<li className="item">
					<Link to="/">Home</Link>
				</li>
				<li className="item">
					<Link to="/superheroes">Traditional SuperHeroes</Link>
				</li>
				<li className="item">
					<Link to="/rqsuperheroes">RQ SuperHeroes</Link>
				</li>
			</ul>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/superheroes" element={<Superheroes />} />
				<Route path="/rqsuperheroes" element={<Rqsuperheroes />} />
			</Routes>
		</div>
	);
}

export default App;
