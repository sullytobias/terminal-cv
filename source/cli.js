#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
  Usage
    $ terminal-cv

  Options
    --name  Your name to override default

  Examples
    $ terminal-cv --name=Sullivan
`,
	{
		importMeta: import.meta,
	},
);

render(<App name={cli.flags.name} />);
