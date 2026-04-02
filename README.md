# fakemink: Heardle

A daily music guessing game for fakemink fans! Based on the famous [Heardle](https://heardle.app) game.

Listen to song intros, guess the fakemink track, and share your scores!

## Features

- Daily song challenges with 6 attempts
- Progressive audio previews (more of the song revealed with each wrong guess)
- Search through 131+ fakemink tracks
- Share your results with emoji grid
- Dev mode for testing (see [DEV_GUIDE.md](DEV_GUIDE.md))

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fakemink-heardle.git
cd fakemink-heardle

# Install dependencies
npm install
# or
yarn
```

### Development

```bash
# Start the development server
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

```bash
npm run build
# or
yarn build
```

Builds the app for production to the `build` folder.

## How to Play

1. Listen to the song intro
2. Search for and select the song you think it is
3. Wrong answers reveal more of the song
4. Try to guess in as few tries as possible!
5. Share your score with friends

## Development

For development tools and testing features, see [DEV_GUIDE.md](DEV_GUIDE.md).

### Dev Mode

To enable dev mode:

1. Create `src/dev.config.json`:
```json
{
  "devMode": true,
  "forceDate": null,
  "showDevTools": true
}
```

Dev mode provides:
- Current song information
- Reroll button to test different songs
- YouTube preview link

## Tech Stack

- React 17
- TypeScript
- YouTube iFrame API
- Styled Components
- React Icons

## Credits

- Original template by [Shizerq](https://github.com/Shizerq/sluchajfun)
- Inspired by [Heardle](https://heardle.app)

## License

MIT
