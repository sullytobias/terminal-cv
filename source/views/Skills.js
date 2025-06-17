import React from 'react';
import {Box, Text} from 'ink';

const skills = {
	dev: [
		'React',
		'Next.js',
		'Three.js',
		'Node.js',
		'TypeScript',
		'Tailwind CSS',
		'Framer Motion',
		'Zustand',
		'Redux',
		'Ink',
		'Jest',
	],
	tools: ['Git', 'Figma', 'Vite', 'Webpack', 'ESLint', 'Prettier', 'Storybook'],
	soft: ['Teamwork', 'Problem Solving', 'Autonomy', 'Creativity'],
};

const Skills = ({color = 'white', isFR = false}) => (
	<Box flexDirection="column" gap={1}>
		<Text color={color} bold underline>
			{isFR ? 'Compétences Techniques :' : 'Technical Skills:'}
		</Text>
		<Text color={color}>• {skills.dev.join(', ')}</Text>

		<Text color={color} bold underline>
			{isFR ? 'Outils & Environnement :' : 'Tools & Environment:'}
		</Text>
		<Text color={color}>• {skills.tools.join(', ')}</Text>

		<Text color={color} bold underline>
			{isFR ? 'Compétences Douces :' : 'Soft Skills:'}
		</Text>
		<Text color={color}>• {skills.soft.join(', ')}</Text>
	</Box>
);

export default Skills;
