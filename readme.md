# terminal-cv

A beautiful and interactive terminal-based CV/resume viewer built with React and Ink. Display your professional experience, skills, and contact information in a modern terminal interface with colorful gradients and ASCII art.

## Features

- 🎨 Beautiful terminal UI with gradients and ASCII art
- 📱 Responsive layout that adapts to terminal size
- 🔗 Interactive links to your social profiles and projects
- 📄 Easy to customize and update
- 🚀 Built with React and Ink for a modern development experience
- 🌈 Multiple themes and visual effects
- 🌍 Bilingual support (English/French)
- 🎮 Interactive navigation and animations

## Install

```bash
$ npm install --global terminal-cv
```

## Usage

```bash
$ terminal-cv --help

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
```

## Configuration

### Command Line Options

| Option       | Description                    | Default | Values                        |
| ------------ | ------------------------------ | ------- | ----------------------------- |
| `--name`     | Your name to display in the CV | -       | Any string                    |
| `--print`    | Show full CV and exit          | false   | true/false                    |
| `--lang`     | Language selection             | 'en'    | 'en'/'fr'                     |
| `--theme`    | Visual theme                   | 'light' | 'light'/'dark'/'neon'/'retro' |
| `--export`   | Export CV format               | -       | 'md'/'txt'                    |
| `--section`  | Show specific section          | -       | 'about'/'projects'/'skills'   |
| `--autoplay` | Auto-navigate through sections | false   | true/false                    |
| `--sound`    | Enable terminal sound effects  | false   | true/false                    |
| `--matrix`   | Enable Matrix-style background | false   | true/false                    |

### Themes

The application supports multiple themes that can be set using the `--theme` flag:

- `light` (default): Clean and modern look with cyan accents
- `dark`: Dark mode with magenta accents
- `neon`: Vibrant neon colors with yellow accents
- `retro`: Classic terminal green on black

### Languages

Support for multiple languages using the `--lang` flag:

- `en` (default): English
- `fr`: French

### Export Options

Export your CV to different formats using the `--export` flag:

- `md`: Markdown format
- `txt`: Plain text format

### Navigation

- Use arrow keys (↑/↓) to navigate the menu
- Press Enter to select an option
- Press Escape to return to the main menu
- Interactive sections:
  - About
  - Projects
  - Skills
  - GitHub Profile
  - LinkedIn Profile
  - Language Switch
  - Exit

### Special Features

- `--autoplay`: Automatically cycles through sections (about, projects, skills)
- `--sound`: Enables terminal sounds for interactions
- `--matrix`: Adds a Matrix-style rain effect in the background
- `--print`: Displays the full CV and exits

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## License

MIT ©
