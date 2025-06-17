import React, {useState, useEffect} from 'react';
import {Box, Text, useInput} from 'ink';

const Game = ({onExit, isFR}) => {
	const [state, setState] = useState('ready');
	const [startTime, setStartTime] = useState(null);
	const [reactionTime, setReactionTime] = useState(null);

	useEffect(() => {
		if (state === 'ready') {
			const timeout = setTimeout(() => {
				setState('wait');
				const randomDelay = 2000 + Math.random() * 3000;
				setTimeout(() => {
					setStartTime(Date.now());
					setState('go');
				}, randomDelay);
			}, 1000);
			return () => clearTimeout(timeout);
		}
	}, [state]);

	useInput((input, key) => {
		if (key.escape) onExit();

		if (state === 'go' && key.return) {
			const now = Date.now();
			setReactionTime(now - startTime);
			setState('result');
		} else if (state === 'wait' && key.return) {
			setState('tooSoon');
		} else if (state === 'result' || state === 'tooSoon') {
			if (key.return) onExit();
		}
	});

	return (
		<Box flexDirection="column" gap={1}>
			{state === 'ready' && (
				<Text color="yellow">
					🎮 {isFR ? 'Prépare-toi...' : 'Get ready...'}
				</Text>
			)}
			{state === 'wait' && (
				<Text>{isFR ? '⏳ Attends le signal...' : '⏳ Wait for it...'}</Text>
			)}
			{state === 'go' && (
				<Text color="green">
					🚀 {isFR ? 'VAS-Y ! Appuie sur Entrée !' : 'GO! Press Enter!'}
				</Text>
			)}
			{state === 'result' && (
				<>
					<Text color="cyan">
						⚡{' '}
						{isFR
							? `Ton temps de réaction : ${reactionTime} ms`
							: `Your reaction time: ${reactionTime} ms`}
					</Text>
					<Text>
						{isFR
							? 'Appuie sur Entrée pour revenir.'
							: 'Press Enter to return.'}
					</Text>
				</>
			)}
			{state === 'tooSoon' && (
				<>
					<Text color="red">
						❌{' '}
						{isFR
							? 'Trop tôt ! Tu as appuyé avant le signal.'
							: 'Too soon! You pressed before "GO!"'}
					</Text>
					<Text>
						{isFR
							? 'Appuie sur Entrée pour réessayer.'
							: 'Press Enter to try again.'}
					</Text>
				</>
			)}
		</Box>
	);
};

export default Game;
