import React, {useState, useEffect} from 'react';
import {Box, Text, useInput, useApp} from 'ink';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import open from 'open';

const menuItems = [
	'👤 About',
	'💼 Projects',
	'🛠 Skills',
	'🔗 GitHub',
	'🔗 LinkedIn',
	'❌ Exit',
];

const App = ({name = 'SULLIVAN', print = false, lang = 'en'}) => {
	const {exit} = useApp();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [view, setView] = useState(print ? 'print' : 'loading');
	const [typedSubtitle, setTypedSubtitle] = useState('');
	const [projectIndex, setProjectIndex] = useState(0);

	const isFR = lang === 'fr';
	const subtitleText = isFR ? 'Développeur Frontend' : 'Frontend Developer';
	const title = figlet.textSync(name.toUpperCase(), {
		horizontalLayout: 'default',
	});

	if (view === 'print') {
		return (
			<Box flexDirection="column">
				<Text>{gradient.pastel.multiline(title)}</Text>
				<Text color="cyan">{chalk.bold(subtitleText)}</Text>
				<Text>
					{isFR
						? `Je suis ${name}, développeur frontend passionné par la 3D, les expériences web immersives, et les outils créatifs.`
						: `I'm ${name}, a frontend developer passionate about 3D, immersive web experiences, and creative dev tools.`}
				</Text>
				<Text bold>{isFR ? 'Projets :' : 'Projects:'}</Text>
				{projects.map((p, i) => (
					<Text key={i}>- {p}</Text>
				))}
				<Text bold>{isFR ? 'Compétences :' : 'Skills:'}</Text>
				<Text>React, Three.js, Node.js, Zustand, Tailwind, Framer Motion</Text>
				<Text>
					GitHub: https://github.com/sullytobias
					{'\n'}LinkedIn: https://linkedin.com/in/sullivan-tobias-340807157
				</Text>
			</Box>
		);
	}

	useEffect(() => {
		if (view === 'loading') {
			const timer = setTimeout(() => setView('title'), 1000);
			return () => clearTimeout(timer);
		}
	}, [view]);

	useEffect(() => {
		if (view === 'title') {
			let i = 0;
			const interval = setInterval(() => {
				setTypedSubtitle(prev => prev + subtitleText[i]);
				i++;
				if (i >= subtitleText.length) {
					clearInterval(interval);
					setTimeout(() => setView('menu'), 400);
				}
			}, 50);
			return () => clearInterval(interval);
		}
	}, [view]);

	useInput((input, key) => {
		if (key.escape) {
			setView('menu');
			return;
		}

		if (view === 'menu') {
			if (key.downArrow) {
				setSelectedIndex(prev => (prev + 1) % menuItems.length);
			} else if (key.upArrow) {
				setSelectedIndex(
					prev => (prev - 1 + menuItems.length) % menuItems.length,
				);
			} else if (key.return) {
				const label = menuItems[selectedIndex];
				if (label.includes('Exit')) {
					exit();
				} else if (label.includes('About')) {
					setView('about');
				} else if (label.includes('Projects')) {
					setProjectIndex(0);
					setView('projects');
				} else if (label.includes('Skills')) {
					setView('skills');
				} else if (label.includes('GitHub')) {
					open('https://github.com/sullytobias');
				} else if (label.includes('LinkedIn')) {
					open('https://linkedin.com/in/sullivan-tobias-340807157');
				}
			}
		}
	});

	useEffect(() => {
		if (view === 'projects' && projectIndex < projects.length) {
			const timer = setTimeout(() => setProjectIndex(prev => prev + 1), 300);
			return () => clearTimeout(timer);
		}
	}, [view, projectIndex]);

	const renderMenu = () => (
		<Box flexDirection="column" marginTop={1}>
			<Text color="greenBright">
				{isFR
					? 'Utilisez ↑ ↓ pour naviguer. Entrée pour sélectionner. Échap pour revenir.'
					: 'Use ↑ ↓ to navigate. Enter to select. Escape to return.'}
			</Text>
			{menuItems.map((item, index) => (
				<Text key={item} inverse={index === selectedIndex}>
					{item}
				</Text>
			))}
		</Box>
	);

	const renderView = () => {
		switch (view) {
			case 'about':
				return (
					<Text>
						I'm Sullivan Tobias, a frontend developer passionate about 3D,
						immersive web experiences, and creative dev tools.
					</Text>
				);
			case 'projects':
				return (
					<Box flexDirection="column">
						{projects.slice(0, projectIndex).map((project, i) => (
							<Text key={i}>- {project}</Text>
						))}
					</Box>
				);
			case 'skills':
				return (
					<Text>
						React, Three.js, Node.js, Zustand, Tailwind, Framer Motion
					</Text>
				);
			default:
				return renderMenu();
		}
	};

	const loadingAnimation = ['⠋', '⠙', '⠸', '⠴', '⠦', '⠇'];
	const [loadingFrame, setLoadingFrame] = useState(0);

	useEffect(() => {
		if (view === 'loading') {
			const interval = setInterval(() => {
				setLoadingFrame(prev => (prev + 1) % loadingAnimation.length);
			}, 100);
			return () => clearInterval(interval);
		}
	}, [view]);

	return (
		<Box flexDirection="column">
			{view === 'loading' && (
				<Text color="cyan">
					{chalk.bold('Loading')} {loadingAnimation[loadingFrame]}
				</Text>
			)}
			{view !== 'loading' && <Text>{gradient.pastel.multiline(title)}</Text>}
			{view === 'title' && <Text color="cyan">{typedSubtitle}</Text>}
			{view !== 'loading' && view !== 'title' && (
				<>
					<Text color="cyan">{chalk.bold(subtitleText)}</Text>
					{renderView()}
				</>
			)}
		</Box>
	);
};

const projects = [
	'Configurator V2 (React/Three.js)',
	'JSON Visualizer (React + Diff)',
	'3D Clock App (React + Timezone)',
	'CLI CV interactif (Ink)',
];

export default App;
