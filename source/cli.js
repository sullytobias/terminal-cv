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
    --name     Your name (ASCII title)
    --print    Print mode (no interaction)
    --lang     Language (en or fr)
    --theme    Theme (light or dark)

  Examples
    $ terminal-cv --theme=dark --lang=fr
`,
	{
		importMeta: import.meta,
	},
);

render(
	<App
		name={cli.flags.name}
		print={cli.flags.print}
		lang={cli.flags.lang || 'en'}
		theme={cli.flags.theme || 'light'}
	/>,
);
