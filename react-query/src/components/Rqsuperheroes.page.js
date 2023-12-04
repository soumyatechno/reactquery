import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = () => {
	return axios.get('http://localhost:4000/superheroes');
};

const Rqsuperheroes = () => {
	const { isLoading, data, error } = useQuery('super-heroes', fetchData);
	if (isLoading)
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	if (error)
		return (
			<div>
				<h2>There is an issue ...</h2>
			</div>
		);

	return (
		<>
			<h2>RqSuperheroes</h2>
			{data?.data.map((hero) => {
				return <div key={hero.name}>{hero.name}</div>;
			})}
		</>
	);
};

export default Rqsuperheroes;
