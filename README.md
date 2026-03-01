# Raj's Portfolio

A clean, performant, and interactive personal portfolio demonstrating both high-level system design principles and refined frontend engineering. Built with React, Vite, and Framer Motion.

## Overview

As a Software Engineer, my goal with this portfolio is to go beyond a simple resume. This site visually articulates my experience in designing, building, and shipping distributed systems that scale. 

Key architectural paradigms showcased in my engineering projects include:
- **Scalable Backend Systems**: API Gateways, Kafka, Redis, Wallet Services
- **Design Patterns**: Saga Pattern, Event-driven Architectures, Role-Based Access Control (RBAC)
- **Modern Data & Interaction**: Advanced data structures (TaskTrie), WebSockets, custom JWT filtering, PostgreSQL

## Features

- **Component-Driven UI**: Modular and reusable React components maintaining clear separation of concerns.
- **Fluid Animations**: Leveraging `framer-motion` for complex physics-based animations, page transitions, and interactive visual elements (e.g., animated architecture diagrams in the Projects section).
- **Data-Driven Content**: Clean separation of data (`portfolioData.js`) and presentation, allowing seamless updates to projects, skills, and personal information.
- **Responsive Layout**: Designed edge-to-edge for an optimal viewing and interacting experience across all device ranges.
- **Performance Optimized**: Built on Vite for lightning-fast HMR and minimal overhead in production builds.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Semantic class names and dynamic CSS properties)
- **Animation**: Framer Motion
- **Icons & Utilities**: React Icons, React Scroll

## Local Development

To run this project locally, simply follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd raj-portfolio
   ```

2. **Install dependencies:**
   This project uses `npm`.
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This will generate optimized static assets in the `dist` directory.

## Project Structure

```text
src/
├── components/          # Reusable UI components (Hero, Projects, Navbar, etc.)
├── data/                # Data structures defining portfolio content
├── App.jsx              # Main application entry point and layout
├── App.css              # Global styles and CSS variables
├── index.css            # Setup and resets
└── main.jsx             # React DOM rendering
```
