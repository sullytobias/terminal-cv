import React from 'react';
import {Box, Text} from 'ink';
import {avatar} from '../constants.js';
import chalk from 'chalk';

const About = ({name, isFR}) => (
	<Box flexDirection="column" gap={1}>
		<Text>{avatar}</Text>

		<Text bold color="cyan">
			{isFR ? `Qui suis-je ?` : `Who am I?`}
		</Text>

		<Text>
			{isFR
				? `Je suis ${chalk.bold(
						name,
				  )}, développeur frontend passionné par la création d'expériences web ${chalk.italic(
						'immersives',
				  )} et ${chalk.italic('innovantes')}.`
				: `I'm ${chalk.bold(
						name,
				  )}, a frontend developer passionate about creating ${chalk.italic(
						'immersive',
				  )} and ${chalk.italic('innovative')} web experiences.`}
		</Text>

		<Text>
			{isFR
				? `Spécialisé en ${chalk.bold('3D')}, interfaces ${chalk.bold(
						'interactives',
				  )} et outils ${chalk.bold(
						'créatifs',
				  )}, je cherche à repousser les limites du web moderne.`
				: `Specializing in ${chalk.bold('3D')}, ${chalk.bold(
						'interactive interfaces',
				  )}, and ${chalk.bold(
						'creative tools',
				  )}, I strive to push the boundaries of modern web development.`}
		</Text>

		<Text>
			{isFR
				? `Expertise : React, Three.js, performance web, expérience utilisateur.`
				: `Expertise: React, Three.js, web performance, user experience.`}
		</Text>
	</Box>
);

export default About;
