import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const exportToFile = ({name, isFR, repos, format}) => {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));

	const title = `# ${name}\n\n`;
	const subtitle = isFR
		? '## Développeur Frontend\n\n'
		: '## Frontend Developer\n\n';
	const about = isFR
		? `Je suis ${name}, développeur frontend passionné par la 3D, les expériences web immersives, et les outils créatifs.\n\n`
		: `I'm ${name}, a frontend developer passionate about 3D, immersive web experiences, and creative dev tools.\n\n`;
	const projectTitle = isFR ? '### Projets\n' : '### Projects\n';
	const projectList = repos.map(p => `- ${p.link}`).join('\n') + '\n\n';
	const skillsTitle = isFR ? '### Compétences\n' : '### Skills\n';
	const skillsList =
		'React, Three.js, Node.js, Zustand, Tailwind, Framer Motion\n\n';
	const links =
		'GitHub: https://github.com/sullytobias\n' +
		'LinkedIn: https://linkedin.com/in/sullivan-tobias-340807157\n';

	const content =
		title +
		subtitle +
		about +
		projectTitle +
		projectList +
		skillsTitle +
		skillsList +
		links;

	const fileName = `resume.${format}`;
	const outputPath = path.join(__dirname, '..', fileName);
	fs.writeFileSync(outputPath, content);
	console.log(`✅ Exported to ${fileName}`);
	process.exit(0);
};
