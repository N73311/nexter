# Nexter

A modern real estate company landing page showcasing advanced CSS Grid layouts and responsive design patterns.

## Overview

Nexter is a fictional luxury real estate website that demonstrates modern CSS techniques including CSS Grid, Flexbox, and SCSS architecture. The project features a sophisticated layout system with multiple grid containers working together to create a seamless, responsive experience.

## Features

- **Advanced CSS Grid Layouts** - Complex nested grids for flexible, responsive design
- **Modern SCSS Architecture** - Organized with partial files for maintainability
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Optimized Images** - Gallery with lazy loading considerations
- **BEM Methodology** - Clean, scalable CSS naming conventions
- **Smooth Animations** - Subtle transitions and hover effects
- **Cross-browser Support** - Autoprefixer ensures compatibility

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/N73311/nexter.git
cd nexter

# Install dependencies
npm install
```

### Development

```bash
# Start development server with live reload and SASS watching
npm start

# Watch SASS files only
npm run watch:sass

# Run development server only
npm run devserver
```

### Production Build

```bash
# Build optimized CSS for production
npm run build:css

# This will:
# 1. Compile SASS to CSS
# 2. Add vendor prefixes with Autoprefixer
# 3. Compress the final CSS file
```

## Project Structure

```
nexter/
├── css/                    # Compiled CSS files
│   └── style.css          # Final stylesheet
├── img/                    # Images and assets
│   ├── gallery/           # Property gallery images
│   ├── houses/            # Property showcase images
│   └── ...                # Other assets
├── sass/                   # SCSS source files
│   ├── _base.scss         # Variables and base styles
│   ├── _typography.scss   # Typography rules
│   ├── _sidebar.scss      # Sidebar component
│   ├── _header.scss       # Header component
│   ├── _realtors.scss     # Realtors section
│   ├── _features.scss     # Features grid
│   ├── _story.scss        # Story section
│   ├── _homes.scss        # Property cards
│   ├── _gallery.scss      # Image gallery grid
│   ├── _footer.scss       # Footer component
│   └── main.scss          # Main SCSS file
├── index.html             # Main HTML file
└── package.json           # Project dependencies
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties
- **SASS/SCSS** - CSS preprocessor for better organization
- **PostCSS** - For autoprefixing
- **NPM Scripts** - Build tooling
- **Live Server** - Development server

## Browser Support

The project uses Autoprefixer to ensure compatibility with:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Design Patterns

### CSS Grid Implementation
The layout uses multiple grid containers:
- Main container grid for overall page structure
- Feature grid for showcasing amenities
- Gallery grid with auto-fit for responsive images
- Card grid for property listings

### SCSS Organization
- Variables for colors and fonts in `_base.scss`
- Component-based architecture with separate partials
- Responsive mixins for consistent breakpoints

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern real estate websites
- Built as part of advanced CSS/SASS learning
- Images from Unsplash and other free resources
