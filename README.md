# Spotify UI Clone

A pixel-perfect Spotify interface clone built with Astro and Tailwind CSS. This project recreates the Spotify desktop application's user interface as a static mockup, featuring a complete layout with sidebar navigation, main content area, and detailed playback controls.

## Live Demos

- **Vercel**: [https://spotify-ui-lemon-eta.vercel.app/](https://spotify-ui-lemon-eta.vercel.app/)
- **GitHub Pages**: [https://olavostauros.github.io/spotify-ui/](https://olavostauros.github.io/spotify-ui/)

## Tech Stack

- **Astro 5.16.6** - Static site generator with file-based routing
- **Tailwind CSS** - Utility-first CSS framework with custom Spotify color palette
- **TypeScript** - Configured with strict mode
- **lucide-static** - SVG icon library

## Features

- Complete Spotify-like layout with sidebar navigation
- Album/playlist grid with hover effects
- Detailed playback bar with controls (visual only, non-functional)
- Custom Spotify color palette matching the official app
- Responsive design with mobile-friendly layout
- Component-based architecture for maintainability

## Project Structure

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
```

## Development Commands

This project uses **pnpm** as the package manager. All commands should be run from the project root:

```bash
# Install dependencies
pnpm install

# Start development server at localhost:4321
pnpm run dev

# Build for production (output to ./dist/)
pnpm run build

# Preview production build locally
pnpm run preview

# Run Astro CLI commands
pnpm run astro ...

# Get help with the Astro CLI
pnpm run astro -- --help
```

## Custom Spotify Color Palette

The project uses custom colors defined in `tailwind.config.js`:

- `spotify-green`: #1DB954 (accent color for buttons and highlights)
- `spotify-black`: #191414 (sidebar background)
- `spotify-gray`: #121212 (main content background)
- `spotify-light-gray`: #282828 (playback bar, card backgrounds)

## Component Architecture

The UI is built using a component composition pattern:

- **Sidebar**: Navigation menu with Home, Search, Library, and playlist sections
- **MainContent**: Responsive grid of album/playlist cards with hover interactions
- **PlaybackBar**: Fixed bottom bar composed of three main sections:
  - **TrackInfo**: Album artwork, song title, artist name, and like button
  - **PlaybackControls**: Playback buttons and progress bar
  - **VolumeControl**: Queue, device selection, volume slider, and fullscreen toggle

## Development Environment

Recommended setup:
- **VS Code** with the `astro-build.astro-vscode` extension
- VS Code debugging configuration is included for the development server

## Notes

- This is a static mockup with no functional audio playback
- Album artwork uses placeholder images from picsum.photos
- No testing framework or linting is currently configured
- The project is optimized for deployment on both Vercel and GitHub Pages

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Discord](https://astro.build/chat)
