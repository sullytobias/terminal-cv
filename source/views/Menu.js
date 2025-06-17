import React from 'react';
import {Box, Text} from 'ink';
import chalk from 'chalk';
import {getMenuItems} from '../constants.js';

const Menu = ({selectedIndex, highlight, isFR}) => {
	const menuItems = getMenuItems(isFR);

	return (
		<Box flexDirection="column" marginTop={1}>
			<Text color={highlight}>
				{isFR
					? 'Utilisez ↑ ↓ pour naviguer. Entrée pour sélectionner. Échap pour revenir.'
					: 'Use ↑ ↓ to navigate. Enter to select. Escape to return.'}
			</Text>
			{menuItems.map((item, index) => {
				const isSelected = index === selectedIndex;
				const content = isSelected
					? chalk.inverse.italic.white.bold(`▶ ${item} ◀`)
					: `  ${item}`;
				return <Text key={item}>{content}</Text>;
			})}
		</Box>
	);
};

export default Menu;
