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
    --name       Your name
    --print      Show full CV and exit
    --lang       Language (en or fr)
    --theme      Theme (light or dark)
    --export     Export CV to .md or .txt
    --section    Directly show a section (about, projects, skills)
    --autoplay   Auto navigate through sections
	--sound      Enable terminal sounds
	--matrix 	 Enable matrix effect

  Examples
    $ terminal-cv --section=projects
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
