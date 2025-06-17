import React from 'react';
import {Box, Text} from 'ink';
import chalk from 'chalk';
import gradient from 'gradient-string';

const Print = ({title, subtitleText, isFR, name, repos}) => (
	<Box flexDirection="column">
		<Text>{gradient.pastel.multiline(title)}</Text>
		<Text color="cyan">{chalk.bold(subtitleText)}</Text>
		<Text>
			{isFR
				? `Je suis ${name}, développeur frontend passionné par la 3D, les expériences web immersives, et les outils créatifs.`
				: `I'm ${name}, a frontend developer passionate about 3D, immersive web experiences, and creative dev tools.`}
		</Text>
		<Text bold>{isFR ? 'Projets :' : 'Projects:'}</Text>
		{repos.map((p, i) => (
			<Text key={i}>
				- {p?.link} ({p?.languages?.join(', ')})
			</Text>
		))}
		<Text bold>{isFR ? 'Compétences :' : 'Skills:'}</Text>
		<Text>React, Three.js, Node.js, Zustand, Tailwind, Framer Motion</Text>

		<Text bold>{isFR ? 'Contactez-moi :' : 'Contact-me'}</Text>
		<Text>GitHub: https://github.com/sullytobias</Text>
		<Text>LinkedIn: https://linkedin.com/in/sullivan-tobias-340807157</Text>
	</Box>
);

export default Print;
