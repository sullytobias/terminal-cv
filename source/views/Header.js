import React from 'react';
import {Text} from 'ink';
import figlet from 'figlet';
import gradient from 'gradient-string';

const Header = ({name, theme}) => {
	const title = figlet.textSync(name.toUpperCase(), {
		font: theme === 'retro' ? 'Computer' : 'Standard',
	});
	return <Text>{gradient.pastel.multiline(title)}</Text>;
};

export default Header;
