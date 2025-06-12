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
    --name     Your name (ASCII title override)
    --print    Print full resume and exit (no interaction)
    --lang     Language (en or fr)

  Examples
	  $ terminal-cv --name=Sully
    $ terminal-cv --print
    $ terminal-cv --lang=fr
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
	/>,
);
