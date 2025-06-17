#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
  Usage
    $ terminal-cv [options]

  Options
    --name       Your name to display in the CV
    --print      Show full CV and exit
    --lang       Language selection (en or fr)
    --theme      Visual theme (light, dark, neon, or retro)
    --export     Export CV format (md or txt)
    --section    Show specific section (about, projects, skills)
    --autoplay   Auto-navigate through sections
    --sound      Enable terminal sound effects
    --matrix     Enable Matrix-style background effect

  Examples
    $ terminal-cv --name="John Doe"
    $ terminal-cv --theme=dark --lang=fr
    $ terminal-cv --section=projects
    $ terminal-cv --export=md
    $ terminal-cv --autoplay --matrix
`,
	{importMeta: import.meta},
);

render(
	<App
		name={cli.flags.name}
		print={cli.flags.print}
		lang={cli.flags.lang || 'en'}
		theme={cli.flags.theme || 'light'}
		exportFormat={cli.flags.export}
		section={cli.flags.section}
		autoplay={cli.flags.autoplay}
		sound={cli.flags.sound}
		matrix={cli.flags.matrix}
	/>,
);
