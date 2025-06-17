import React, {useState, useEffect} from 'react';
import {Box, Text, useInput, useApp} from 'ink';

import MatrixRain from './MatrixRain.js';

import {menuItems, autoplayViews, projectsData} from './constants.js';
import {fetchRepos} from './api.js';

import Menu from './views/Menu.js';
import About from './views/About.js';
import Projects from './views/Projects.js';
import Skills from './views/Skills.js';

import path from 'path';
import {fileURLToPath} from 'url';
import chalk from 'chalk';
import figlet from 'figlet';
import open from 'open';
import themes from './themes.js';
import Toast from './views/Toast.js';
import Header from './views/Header.js';
import Print from './views/Print.js';
import {exportToFile} from './exporter.js';

const App = ({
	name = 'SULLIVAN',
	print = false,
	lang: initialLang = 'en',
	theme = 'light',
	exportFormat,
	section,
	autoplay = false,
	sound = false,
	matrix = false,
}) => {
	const {exit} = useApp();

	const selectedTheme = themes[theme];

	const {accent, text, highlight} = selectedTheme;

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [view, setView] = useState(
		print
			? 'print'
			: section
			? section.toLowerCase()
			: autoplay
			? 'about'
			: 'loading',
	);

	const [typedSubtitle, setTypedSubtitle] = useState('');

	const [repos, setRepos] = useState([]);

	// language handling
	const [currentLang, setLang] = useState(initialLang);
	const [langChanged, setLangChanged] = useState(false);
	const [toastFrame, setToastFrame] = useState(0);
	const isFR = currentLang === 'fr';

	const subtitleText = isFR ? 'Développeur Frontend' : 'Frontend Developer';

	const title = figlet.textSync(name.toUpperCase(), {
		font: theme === 'retro' ? 'Computer' : 'Standard',
	});

	if (exportFormat === 'md' || exportFormat === 'txt') {
		exportToFile({
			name,
			isFR,
			repos: repos.length ? repos : projectsData,
			format: exportFormat,
		});
	}

	if (view === 'print')
		return (
			<Print
				title={title}
				subtitleText={subtitleText}
				isFR={isFR}
				name={name}
				repos={repos.length ? repos : projectsData}
			/>
		);

	useEffect(() => {
		fetchRepos(['sullytobias', 'sullivantobias'])
			.then(r => setRepos(r))
			.catch(e => console.error(e));
	}, []);

	useEffect(() => {
		if (!autoplay) return;

		const index = autoplayViews.indexOf(view);
		if (index === -1 || index >= autoplayViews.length - 1) return;

		const timer = setTimeout(() => {
			setView(autoplayViews[index + 1]);
		}, 2500);

		return () => clearTimeout(timer);
	}, [view, autoplay]);

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
		if (sound) process.stdout.write('\x07'); //

		if (key.escape) {
			if (view !== 'menu') {
				setView('menu');
			}
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
					setView('projects');
				} else if (label.includes('Skills')) {
					setView('skills');
				} else if (label.includes('GitHub')) {
					open('https://github.com/sullytobias');
				} else if (label.includes('LinkedIn')) {
					open('https://linkedin.com/in/sullivan-tobias-340807157');
				} else if (label.includes('Switch')) {
					setLang(prev => {
						const next = prev === 'fr' ? 'en' : 'fr';
						setLangChanged(true);
						setToastFrame(0);

						const interval = setInterval(() => {
							setToastFrame(prev => {
								if (prev >= 5) {
									clearInterval(interval);
									return prev;
								}
								return prev + 1;
							});
						}, 100);

						// Hide after 1.5s
						setTimeout(() => setLangChanged(false), 1500);
						return next;
					});
				}
			}
		}
	});

	const renderView = () => {
		switch (view) {
			case 'about':
				return <About name={name} isFR={isFR} />;
			case 'projects':
				return (
					<Projects
						repos={repos.length ? repos : projectsData}
						highlight={highlight}
						accent={accent}
					/>
				);
			case 'skills':
				return <Skills isFR={isFR} color={text} />;
			default:
				return (
					<Menu
						selectedIndex={selectedIndex}
						highlight={highlight}
						isFR={isFR}
					/>
				);
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
		<>
			{matrix && (
				<Box flexDirection="column" position="absolute" top={0} left={0}>
					<MatrixRain />
				</Box>
			)}
			<Box flexDirection="column">
				{theme === 'retro' && <Text color="green">[ CRT MODE ENABLED ]</Text>}

				{view === 'loading' && (
					<Text color="cyan">
						{chalk.bold('Loading')} {loadingAnimation[loadingFrame]}
					</Text>
				)}
				{view !== 'loading' && <Header name={name} theme={theme} />}
				{view === 'title' && <Text color="cyan">{typedSubtitle}</Text>}
				{view !== 'loading' && view !== 'title' && (
					<>
						<Text color={accent}>{chalk.bold(subtitleText)}</Text>
						{renderView()}
					</>
				)}
				{langChanged && <Toast frame={toastFrame} isFR={isFR} />}
			</Box>
		</>
	);
};

export default App;
