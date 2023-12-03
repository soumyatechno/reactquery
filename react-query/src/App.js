import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home.page';
import Superheroes from './components/superheroes.page';
import Rqsuperheroes from './components/Rqsuperheroes.page';
function App() {
	return (
		<div className="App">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/superheroes">Traditional SuperHeroes</Link>
				</li>
				<li>
					<Link to="/rqsuperheroes">RQ SuperHeroes</Link>
				</li>
			</ul>
			<Routes>
				<Route to="/" element={<Home />} />
				<Route to="/superheroes" element={<Superheroes />} />
				<Route to="/rqsuperheroes" element={<Rqsuperheroes />} />
			</Routes>
		</div>
	);
}

export default App;
