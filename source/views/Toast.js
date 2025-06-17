import React from 'react';
import {Text} from 'ink';

const toastFrames = ['⚡', '✨', '🌐', '🚀', '💫', '🌟'];

const Toast = ({frame, isFR}) => (
	<Text color="green">
		{toastFrames[frame % toastFrames.length]}{' '}
		{isFR ? 'Langue changée : Français 🇫🇷' : 'Language switched: English 🇬🇧'}
	</Text>
);

export default Toast;
