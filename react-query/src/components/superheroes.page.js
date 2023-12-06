import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Superheroes = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	useEffect(() => {
		axios
			.get('http://localhost:4000/superheroes')
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err);
				setIsLoading(false);
			});
	}, []);
	if (isLoading)
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);

	if (error)
		return (
			<div>
				<h2>{error.message}</h2>
			</div>
		);

	return (
		<>
			<h2>Super Heroes</h2>
			{data.map((hero) => {
				return <div key={hero.name}>{hero.name}</div>;
			})}
		</>
	);
};

export default Superheroes;
