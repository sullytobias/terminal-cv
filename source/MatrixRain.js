import React, {useEffect, useState} from 'react';
import {Text} from 'ink';

const columns = 40;
const rows = 5;
const charset = '01';

const getRandomChar = () => charset[Math.floor(Math.random() * charset.length)];

const MatrixRain = () => {
	const [lines, setLines] = useState(
		Array.from({length: rows}, () =>
			Array.from({length: columns}, getRandomChar).join(''),
		),
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setLines(prev =>
				prev.map(() => Array.from({length: columns}, getRandomChar).join('')),
			);
		}, 80);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{lines.map((line, i) => (
				<Text key={i} color="green">
					{line}
				</Text>
			))}
		</>
	);
};

export default MatrixRain;
