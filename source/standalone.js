// source/standalone.js
import React from 'react';
import {render, Text, Box} from 'ink';
import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from 'figlet';

const name = 'SULLIVAN';
const isFR = false;

const title = figlet.textSync(name.toUpperCase(), {
	horizontalLayout: 'default',
});
const subtitle = isFR ? 'Développeur Frontend' : 'Frontend Developer';

const about = isFR
	? `Je suis ${name}, développeur frontend passionné par la 3D, les expériences web immersives, et les outils créatifs.`
	: `I'm ${name}, a frontend developer passionate about 3D, immersive web experiences, and creative dev tools.`;

const projects = [
	'Configurator V2 (React/Three.js)',
	'JSON Visualizer (React + Diff)',
	'3D Clock App (React + Timezone)',
	'CLI CV interactif (Ink)',
];

const skills = 'React, Three.js, Node.js, Zustand, Tailwind, Framer Motion';

const StandaloneCV = () => (
	<Box flexDirection="column">
		<Text>{gradient.rainbow.multiline(title)}</Text>
		<Text color="cyan">{chalk.bold(subtitle)}</Text>
		<Text>{about}</Text>
		<Text bold>{isFR ? 'Projets :' : 'Projects:'}</Text>
		{projects.map((p, i) => (
			<Text key={i}>- {p}</Text>
		))}
		<Text bold>{isFR ? 'Compétences :' : 'Skills:'}</Text>
		<Text>{skills}</Text>
		<Text>
			GitHub: https://github.com/sullytobias
			{'\n'}LinkedIn: https://linkedin.com/in/sullivan-tobias-340807157
		</Text>
	</Box>
);

render(<StandaloneCV />);
