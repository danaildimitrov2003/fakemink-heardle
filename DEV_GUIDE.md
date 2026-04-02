# fakemink: Heardle - Dev Guide

## Dev Mode Configuration

Create a `dev.config.json` file in the `src/` folder (not committed to git):

```json
{
  "devMode": true,
  "forceDate": null,
  "showDevTools": true,
  "notes": "Set forceDate to a specific date string (YYYY-MM-DD) to test a specific day's song. Leave null to use today's date."
}
```

### Dev Config Options

- **`devMode`** (boolean): Enable/disable dev mode features
- **`forceDate`** (string | null): Force a specific date in format `YYYY-MM-DD`. Set to `null` to use today's date
- **`showDevTools`** (boolean): Show/hide the dev tools panel in the bottom-right corner

### Examples

**Test a specific day's song:**
```json
{
  "devMode": true,
  "forceDate": "2024-01-15",
  "showDevTools": true
}
```

**Use today but with dev tools visible:**
```json
{
  "devMode": true,
  "forceDate": null,
  "showDevTools": true
}
```

## Dev Tools Features

When dev mode is enabled, a green panel appears in the bottom-right corner with:

- **Current Song Info**: Display the artist, name, and YouTube ID
- **🔄 Reroll Song**: Reset the game with a new random song
- **🎬 Watch on YouTube**: Opens the current song in a new tab

## Workflow

1. **Create `src/dev.config.json`** (gitignored)
2. **Set `devMode: true`** to enable dev tools
3. **Use `forceDate`** to test specific songs
4. **Use Reroll** to test different random songs
5. **Use YouTube link** to quickly preview songs

---

**Note**: The `dev.config.json` file is never committed to git and is added to `.gitignore`.
