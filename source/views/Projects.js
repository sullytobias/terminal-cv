import React from 'react';
import {Box, Text} from 'ink';

const Projects = ({repos, highlight, accent}) => (
	<Box flexDirection="column">
		{repos.map((p, i) => (
			<Box key={`project-${i}`} flexDirection="column" marginBottom={1}>
				<Text color={highlight}>• {p?.name}</Text>
				<Text>{p?.link}</Text>
				<Text color={accent}>{p?.languages?.join(', ')}</Text>
			</Box>
		))}
	</Box>
);

export default Projects;
