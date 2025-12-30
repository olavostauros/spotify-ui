# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Spotify UI clone built with Astro 5.16.6 and Tailwind CSS. The project features a complete Spotify-like layout with sidebar navigation, main content area, and a detailed playback bar component at the bottom. This is a static mockup with no functional playback controls.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs at localhost:4321)
npm run dev

# Build for production (output to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro ...

# Get Astro CLI help
npm run astro -- --help
```

## Architecture

### Framework
- **Astro 5.16.6**: Static site generator with file-based routing
- **Tailwind CSS**: Utility-first CSS framework with custom Spotify color palette
- **TypeScript**: Configured with strict mode (`astro/tsconfigs/strict`)
- **Icons**: lucide-static for SVG icons

### Project Structure
```
src/
├── components/
│   ├── Sidebar.astro           # Left navigation sidebar
│   ├── MainContent.astro       # Main content area with album grid
│   ├── PlaybackBar.astro       # Bottom playback bar (assembles sub-components)
│   ├── PlaybackControls.astro  # Center controls (play, pause, skip, etc.)
│   ├── TrackInfo.astro         # Left section of playback bar
│   ├── VolumeControl.astro     # Right section of playback bar
│   └── ProgressBar.astro       # Progress slider component
├── layouts/
│   └── Layout.astro            # Base HTML layout wrapper
└── pages/
    └── index.astro             # Main page composition

public/
├── icons/                      # SVG icons from lucide-static
└── images/
    └── album-covers/           # Placeholder album artwork

dist/                           # Build output directory
```

### Styling
- **Custom Spotify Colors** (defined in `tailwind.config.js`):
  - `spotify-green`: #1DB954 (accent color)
  - `spotify-black`: #191414 (sidebar background)
  - `spotify-gray`: #121212 (main content background)
  - `spotify-light-gray`: #282828 (playback bar, cards)

### Component Architecture
- **Sidebar**: Navigation menu with Home, Search, Library, and playlists
- **MainContent**: Grid of album/playlist cards with hover effects
- **PlaybackBar**: Fixed bottom bar with 3-column grid layout:
  - Left: TrackInfo (album art, song title, artist, like button)
  - Center: PlaybackControls (shuffle, previous, play/pause, next, repeat, progress bar)
  - Right: VolumeControl (queue, devices, volume slider, fullscreen)

### Key Design Patterns
- **Component Composition**: PlaybackBar assembles TrackInfo, PlaybackControls, and VolumeControl
- **Hover Effects**: Cards show play button on hover, buttons change color
- **Responsive Grid**: Album cards use responsive grid (2-5 columns based on screen size)
- **Fixed Layout**: PlaybackBar is fixed at bottom, main content has `pb-24` to prevent overlap

### Development Environment
- **VS Code**: Recommended extension is `astro-build.astro-vscode`
- **Debugging**: VS Code launch configuration available for development server
- **No testing framework configured**: No test scripts in package.json
- **No linting configured**: No ESLint or Prettier in dependencies

## TypeScript Configuration
Uses Astro's strict TypeScript preset, which includes:
- Strict type checking enabled
- Astro type definitions auto-generated in `.astro/types.d.ts`
- All project files included except `dist/`

## Adding New Features
When adding new components or features:
- Place reusable components in `src/components/`
- Use Tailwind utility classes for styling
- Follow the Spotify color palette for consistency
- Icons are available in `public/icons/` from lucide-static
- Use placeholder images from `https://picsum.photos/` for album artwork
