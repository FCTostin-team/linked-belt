# FCT Linked-Belt Generator <a href="https://github.com/OstinUA"><img align="right" src="https://img.shields.io/badge/OstinUA-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>

> A lightweight Factorio-focused web utility that spits out production-ready Lua console commands for spawning and linking `linked-belt` entities by tag.

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue?style=for-the-badge)](LICENSE)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Factorio](https://img.shields.io/badge/Factorio-orange?style=for-the-badge&logo=factorio&logoColor=white)
![Repo Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)

> [!IMPORTANT]
> This tool generates **console commands** (`/c`) for Factorio. It does not patch saves or mods directly.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Technical Notes](#technical-notes)
  - [Project Structure](#project-structure)
  - [Key Design Decisions](#key-design-decisions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)
- [Community and Support](#community-and-support)
- [Support the Development](#support-the-development)

## Features

- **Lua command generation for linked belts**
  Generates `/c` commands to spawn `linked-belt` entities at player-relative coordinates.

- **Tag-driven pairing workflow**
  Lets you define custom tags for source and destination belts so you can wire pairs predictably.

- **Auto-generated link command**
  Builds a combined command using `game.get_entity_by_tag(...)`, sets `linked_belt_type` (`input`/`output`), then calls `connect_linked_belts(...)`.

- **Copy-to-clipboard UX**
  One-click copy buttons for each generated command block with instant visual feedback.

- **Built-in localization layer**
  Supports multiple UI languages via profile-based locale scripts and persists selection in `localStorage`.

- **Factorio-themed frontend**
  Pixel-ish dark style tuned to match the in-game visual vibe.

## Technology Stack

- **Languages:** HTML5, CSS3, vanilla JavaScript (ES6+)
- **Runtime model:** Static client-side web app (no backend, no build step)
- **Localization:** Dynamic script loading from `profiles/*.js`
- **Persistence:** Browser `localStorage` for language preference
- **Target domain:** Factorio linked-belt command authoring

## Technical Notes

### Project Structure

```text
.
├── index.html           # App markup and UI layout
├── style.css            # Factorio-inspired styling and animations
├── script.js            # Core command generation, localization, clipboard logic
├── profiles/            # Locale dictionaries loaded at runtime
│   ├── en.js
│   ├── ru.js
│   └── ...other locales
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

### Key Design Decisions

1. **No framework, no bundler**
   The project stays framework-free to keep startup overhead near-zero and make contribution friction minimal.

2. **Deterministic command templates**
   Command templates are stored as static string literals and patched only at tag placeholders, making generated output predictable.

3. **Lazy locale loading**
   Locale files are loaded only when needed, so the default initial load remains lightweight.

4. **Graceful i18n fallback**
   If a locale cannot be loaded, the app automatically falls back to Russian to avoid a broken UI.

> [!TIP]
> If you are shipping this tool on a static host, keep the `profiles/` directory intact; locale loading is path-based.

## Getting Started

### Prerequisites

You only need:

- A modern browser (Chrome, Edge, Firefox, Safari)
- Factorio client (for actually executing generated console commands)

Optional but useful for contributors:

- Git
- Any local static server (for example `python -m http.server`)

### Installation

```bash
# 1) Clone the repo
git clone https://github.com/OstinUA/linked-belt.git

# 2) Enter the project folder
cd linked-belt

# 3) Run locally (option A: open directly)
# Open index.html in your browser

# 4) Run locally (option B: local static server, recommended)
python -m http.server 8080
# then open http://localhost:8080
```

> [!NOTE]
> Direct file-open mode works, but using a local server is more robust for testing locale script loading and browser behavior consistency.

## Testing

This repository currently has no formal automated test suite, but you can run pragmatic quality checks:

```bash
# Validate JS syntax
node --check script.js

# Quick static smoke test with a local server
python -m http.server 8080
# open http://localhost:8080 and verify:
# - tag inputs update all command blocks
# - copy buttons work
# - language switching updates labels and persists after reload
```

Manual functional checklist:

1. Enter two distinct tags.
2. Confirm both belt commands use the correct tags.
3. Confirm combined command references both tags and links entities.
4. Paste commands into Factorio console and validate behavior in-game.

## Deployment

This is a static web app, so deployment is straightforward.

### Static Hosting

- GitHub Pages
- Netlify
- Vercel (static mode)
- Any CDN/object storage static site hosting

### Minimal Deployment Flow

```bash
# Push main branch and publish root as static content
git push origin main
```

> [!WARNING]
> If you deploy under a subpath, ensure relative paths like `profiles/<lang>.js` remain resolvable.

## Usage

```text
1) Open the app in browser.
2) Set tag for loading belt (input), e.g. iron_bus_in.
3) Set tag for unloading belt (output), e.g. iron_bus_out.
4) Copy command #1 and execute in Factorio console.
5) Copy command #2 and execute in Factorio console.
6) Copy combined command and execute it to link both entities.
```

Example generated linking snippet:

```lua
/c
local i = game.get_entity_by_tag('iron_bus_in')
local o = game.get_entity_by_tag('iron_bus_out')
i.linked_belt_type = 'input'
o.linked_belt_type = 'output'
i.connect_linked_belts(o)
```

> [!CAUTION]
> Tags must be unique and exact. If either tag points to the wrong entity (or no entity), linking will fail.

## Configuration

There is no `.env` or server-side config in this project.

Current configurable behavior:

- **Language selection** is persisted in `localStorage` under key: `linked-belt-lang`.
- **Supported locales** are defined by files in `profiles/` and options in the language dropdown.
- **Default fallback locale** is Russian (`ru`) when a selected locale fails to load.

## License

Distributed under the Apache License 2.0. See `LICENSE` for details.

## Community and Support

Project created with the support of the FCTostin community.

[![YouTube](https://img.shields.io/badge/YouTube-Channel-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@FCT-Ostin)
[![Telegram](https://img.shields.io/badge/Telegram-Join_Chat-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/FCTostin)
[![Steam](https://img.shields.io/badge/Steam-Join_Group-1b2838?style=for-the-badge&logo=steam&logoColor=white)](https://steamcommunity.com/groups/FCTgroup)

## Support the Development

[![Patreon](https://img.shields.io/badge/Patreon-Support-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/c/OstinFCT)
[![Boosty](https://img.shields.io/badge/Boosty-Donate-F15F2C?style=for-the-badge&logo=boosty&logoColor=white)](https://boosty.to/ostinfct)
