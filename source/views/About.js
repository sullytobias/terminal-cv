import React, {useState, useEffect} from 'react';
import {Box, Text} from 'ink';
import {avatar} from '../constants.js';
import chalk from 'chalk';

const linesFR = name => [
	`Je suis ${chalk.bold(
		name,
	)}, développeur frontend passionné par la création d'expériences web ${chalk.italic(
		'immersives',
	)} et ${chalk.italic('innovantes')}.`,
	`Spécialisé en ${chalk.bold('3D')}, interfaces ${chalk.bold(
		'interactives',
	)} et outils ${chalk.bold(
		'créatifs',
	)}, je cherche à repousser les limites du web moderne.`,
	`Expertise : React, Three.js, performance web, expérience utilisateur.`,
];

const linesEN = name => [
	`I'm ${chalk.bold(
		name,
	)}, a frontend developer passionate about creating ${chalk.italic(
		'immersive',
	)} and ${chalk.italic('innovative')} web experiences.`,
	`Specializing in ${chalk.bold('3D')}, ${chalk.bold(
		'interactive interfaces',
	)}, and ${chalk.bold(
		'creative tools',
	)}, I strive to push the boundaries of modern web development.`,
	`Expertise: React, Three.js, web performance, user experience.`,
];

const About = ({name, isFR}) => {
	const [visibleLines, setVisibleLines] = useState(0);
	const lines = isFR ? linesFR(name) : linesEN(name);

	useEffect(() => {
		if (visibleLines < lines.length) {
			const timeout = setTimeout(() => {
				setVisibleLines(visibleLines + 1);
			}, 700);
			return () => clearTimeout(timeout);
		}
	}, [visibleLines, lines.length]);

	return (
		<Box flexDirection="column" gap={1}>
			<Text>{avatar}</Text>
			<Text bold color="cyan">
				{isFR ? 'Qui suis-je ?' : 'Who am I?'}
			</Text>
			{lines.slice(0, visibleLines).map((line, index) => (
				<Text key={index}>{line}</Text>
			))}
		</Box>
	);
};

export default About;
