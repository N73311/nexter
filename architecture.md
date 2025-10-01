# Nexter - System Architecture

## Overview
A modern real estate landing page demonstrating advanced CSS Grid layouts, Flexbox, and responsive design patterns built with SCSS architecture and BEM methodology.

## Architecture Diagram

```mermaid
graph TB
    subgraph "Client Layer"
        Browser[Web Browser]
        Mobile[Mobile Device]
        Tablet[Tablet Device]
    end

    subgraph "Presentation Layer"
        HTML[Semantic HTML5]
        CSS[Compiled CSS]
        Grid[CSS Grid System]
        Responsive[Responsive Breakpoints]
    end

    subgraph "SCSS Architecture"
        Main[main.scss]
        Base[Base Styles]
        Layout[Layout Components]
        Components[UI Components]
        Variables[SCSS Variables]
        Mixins[SCSS Mixins]
    end

    subgraph "Build Pipeline"
        SCSS[SCSS Compiler]
        PostCSS[PostCSS Processor]
        Autoprefixer[Autoprefixer]
        Minifier[CSS Minifier]
    end

    subgraph "Asset Management"
        Images[Optimized Images]
        Fonts[Web Fonts]
        SVG[SVG Graphics]
    end

    subgraph "Deployment"
        StaticFiles[Static Files]
        CDN[CDN Distribution]
        Cache[Browser Cache]
    end

    Browser --> HTML
    Mobile --> Responsive
    Tablet --> Responsive

    HTML --> CSS
    CSS --> Grid
    Grid --> Responsive

    Main --> Base
    Main --> Layout
    Main --> Components
    Main --> Variables
    Main --> Mixins

    Base --> SCSS
    Layout --> SCSS
    Components --> SCSS

    SCSS --> PostCSS
    PostCSS --> Autoprefixer
    Autoprefixer --> Minifier

    Images --> StaticFiles
    Fonts --> StaticFiles
    SVG --> StaticFiles
    Minifier --> StaticFiles

    StaticFiles --> CDN
    CDN --> Cache
    Cache --> Browser

    style Browser fill:#e1f5ff,stroke:#01579b,stroke-width:2px
    style Grid fill:#ffd93d,stroke:#f59f00,stroke-width:3px
    style SCSS fill:#cc6699,stroke:#8b2252,stroke-width:3px
    style CDN fill:#b2f2bb,stroke:#2f9e44,stroke-width:2px
```

## CSS Grid Layout System

```mermaid
graph TB
    subgraph "Main Grid Container"
        PageGrid[Page Grid Layout<br/>10 columns x 6 rows]
    end

    subgraph "Grid Areas"
        Sidebar[Sidebar<br/>1 col x full height]
        Header[Header<br/>8 cols x 1 row]
        Realtors[Realtors<br/>3 cols x 1 row]
        Features[Features<br/>8 cols x 1 row]
        Story[Story<br/>6 cols x 1 row]
        Homes[Homes<br/>8 cols x 1 row]
        Gallery[Gallery<br/>8 cols x 1 row]
        Footer[Footer<br/>10 cols x 1 row]
    end

    subgraph "Nested Grids"
        FeaturesGrid[Features Grid<br/>4 cols auto-fit]
        HomesGrid[Homes Grid<br/>3 cols responsive]
        GalleryGrid[Gallery Grid<br/>Masonry layout]
        FooterGrid[Footer Grid<br/>Auto columns]
    end

    PageGrid --> Sidebar
    PageGrid --> Header
    PageGrid --> Realtors
    PageGrid --> Features
    PageGrid --> Story
    PageGrid --> Homes
    PageGrid --> Gallery
    PageGrid --> Footer

    Features --> FeaturesGrid
    Homes --> HomesGrid
    Gallery --> GalleryGrid
    Footer --> FooterGrid

    style PageGrid fill:#fff3e0,stroke:#e65100,stroke-width:3px
    style FeaturesGrid fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style HomesGrid fill:#fce4ec,stroke:#880e4f,stroke-width:2px
    style GalleryGrid fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
```

## Component Architecture

```mermaid
graph LR
    subgraph "Layout Components"
        Container[Container]
        SidebarComp[Sidebar Component]
        HeaderComp[Header Component]
        FooterComp[Footer Component]
    end

    subgraph "Feature Components"
        FeatureCard[Feature Card]
        HomeCard[Home Card]
        RealtorCard[Realtor Card]
        GalleryItem[Gallery Item]
    end

    subgraph "UI Elements"
        Button[Button Component]
        Heading[Heading Styles]
        Icon[SVG Icons]
        Image[Responsive Images]
    end

    subgraph "Utilities"
        Spacing[Spacing Utilities]
        Typography[Typography System]
        Colors[Color Variables]
    end

    Container --> SidebarComp
    Container --> HeaderComp
    Container --> FooterComp

    SidebarComp --> Button
    HeaderComp --> Heading
    FeatureCard --> Icon
    HomeCard --> Image

    Button --> Colors
    Heading --> Typography
    Icon --> Colors
    Image --> Spacing

    style Container fill:#bbdefb,stroke:#1976d2,stroke-width:2px
    style FeatureCard fill:#c8e6c9,stroke:#388e3c,stroke-width:2px
    style Button fill:#ffccbc,stroke:#d84315,stroke-width:2px
```

## SCSS File Structure

```mermaid
graph TB
    subgraph "Main Entry Point"
        MainSCSS[main.scss]
    end

    subgraph "Base Layer"
        Reset[_reset.scss]
        BaseStyles[_base.scss]
        TypographyBase[_typography.scss]
        Utilities[_utilities.scss]
    end

    subgraph "Abstracts"
        VariablesFile[_variables.scss]
        MixinsFile[_mixins.scss]
        Functions[_functions.scss]
    end

    subgraph "Layout"
        GridLayout[_grid.scss]
        SidebarLayout[_sidebar.scss]
        HeaderLayout[_header.scss]
        FooterLayout[_footer.scss]
    end

    subgraph "Components"
        Features[_features.scss]
        Homes[_homes.scss]
        Gallery[_gallery.scss]
        Realtors[_realtors.scss]
        Story[_story.scss]
    end

    MainSCSS --> Reset
    MainSCSS --> BaseStyles
    MainSCSS --> TypographyBase
    MainSCSS --> Utilities

    MainSCSS --> VariablesFile
    MainSCSS --> MixinsFile
    MainSCSS --> Functions

    MainSCSS --> GridLayout
    MainSCSS --> SidebarLayout
    MainSCSS --> HeaderLayout
    MainSCSS --> FooterLayout

    MainSCSS --> Features
    MainSCSS --> Homes
    MainSCSS --> Gallery
    MainSCSS --> Realtors
    MainSCSS --> Story

    style MainSCSS fill:#cc6699,stroke:#8b2252,stroke-width:3px
    style VariablesFile fill:#fff3e0,stroke:#e65100,stroke-width:2px
    style GridLayout fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
```

## Responsive Design Breakpoints

```mermaid
graph LR
    subgraph "Mobile First Approach"
        Base[Base Styles<br/>320px+]
    end

    subgraph "Breakpoints"
        Small[Small<br/>600px+]
        Medium[Medium<br/>900px+]
        Large[Large<br/>1200px+]
        XLarge[Extra Large<br/>1800px+]
    end

    subgraph "Layout Changes"
        SingleCol[1 Column Layout]
        TwoCol[2 Column Layout]
        ThreeCol[3 Column Layout]
        FullGrid[Full Grid Layout]
    end

    Base --> Small
    Small --> Medium
    Medium --> Large
    Large --> XLarge

    Base --> SingleCol
    Small --> TwoCol
    Medium --> ThreeCol
    Large --> FullGrid
    XLarge --> FullGrid

    style Base fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style Medium fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    style FullGrid fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
```

## Build Process

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Watch as SCSS Watcher
    participant Compiler as Node-sass
    participant PostCSS as PostCSS
    participant Auto as Autoprefixer
    participant Min as CSS Minifier
    participant Dist as Distribution

    Dev->>Watch: Save SCSS file
    Watch->>Compiler: Detect change
    Compiler->>Compiler: Compile SCSS to CSS
    Compiler->>PostCSS: Pass compiled CSS
    PostCSS->>Auto: Apply transformations
    Auto->>Auto: Add vendor prefixes
    Auto->>Min: Pass processed CSS
    Min->>Min: Minify CSS
    Min->>Dist: Output to css/style.css
    Dist->>Dev: Live reload browser

    Note over Dev,Dist: Development workflow with hot reload
```

## Grid Template Implementation

```mermaid
graph TB
    subgraph "Grid Template Definition"
        Container[.container]
        Columns[grid-template-columns]
        Rows[grid-template-rows]
        Areas[grid-template-areas]
    end

    subgraph "Column Configuration"
        Col1[sidebar: 8rem]
        Col2[main content: 1fr]
        Col3[repeat pattern]
        Col4[minmax flexible]
    end

    subgraph "Row Configuration"
        Row1[header: 80vh]
        Row2[features: min-content]
        Row3[auto-sized rows]
        Row4[footer: min-content]
    end

    subgraph "Named Grid Areas"
        SidebarArea[sidebar area]
        HeaderArea[header area]
        FeaturesArea[features area]
        HomesArea[homes area]
        GalleryArea[gallery area]
    end

    Container --> Columns
    Container --> Rows
    Container --> Areas

    Columns --> Col1
    Columns --> Col2
    Columns --> Col3
    Columns --> Col4

    Rows --> Row1
    Rows --> Row2
    Rows --> Row3
    Rows --> Row4

    Areas --> SidebarArea
    Areas --> HeaderArea
    Areas --> FeaturesArea
    Areas --> HomesArea
    Areas --> GalleryArea

    style Container fill:#fff3e0,stroke:#e65100,stroke-width:3px
    style Columns fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style Areas fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
```

## BEM Methodology Implementation

```mermaid
graph LR
    subgraph "Block"
        Feature[.feature]
        Home[.home]
        Gallery[.gallery]
    end

    subgraph "Elements"
        FeatureIcon[.feature__icon]
        FeatureText[.feature__text]
        HomeImg[.home__img]
        HomeTitle[.home__title]
        GalleryItem[.gallery__item]
    end

    subgraph "Modifiers"
        FeatureLarge[.feature--large]
        HomeSold[.home--sold]
        GalleryFeatured[.gallery__item--featured]
    end

    Feature --> FeatureIcon
    Feature --> FeatureText
    Feature --> FeatureLarge

    Home --> HomeImg
    Home --> HomeTitle
    Home --> HomeSold

    Gallery --> GalleryItem
    GalleryItem --> GalleryFeatured

    style Feature fill:#bbdefb,stroke:#1976d2,stroke-width:2px
    style FeatureIcon fill:#c8e6c9,stroke:#388e3c,stroke-width:2px
    style FeatureLarge fill:#ffccbc,stroke:#d84315,stroke-width:2px
```

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Custom Properties
- **SCSS/Sass**: CSS preprocessor
- **BEM**: CSS methodology

### Build Tools
- **Node-sass**: SCSS compilation
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefix automation
- **npm-run-all**: Script orchestration
- **Live Server**: Development server

### Design System
- **CSS Grid**: Primary layout system
- **Flexbox**: Component-level layouts
- **Custom Properties**: CSS variables
- **Media Queries**: Responsive design

## Key Features

### Advanced CSS Grid
- Complex multi-dimensional layouts
- Named grid areas
- Grid template areas
- Auto-fit and auto-fill
- Minmax for flexible sizing
- Grid gap for spacing

### Responsive Design
- Mobile-first approach
- Fluid typography
- Flexible images
- Responsive grid systems
- Breakpoint management

### SCSS Features
- Variables for consistency
- Mixins for reusability
- Nesting for organization
- Partials for modularity
- Functions for calculations

### Performance
- Minified CSS
- Optimized images
- Efficient selectors
- Minimal HTTP requests
- Critical CSS inline

## Layout Sections

### Sidebar
- Fixed width (8rem)
- Full viewport height
- Navigation button
- Brand logo

### Header
- 80vh height
- Background image
- Call-to-action buttons
- Featured properties

### Features Section
- Auto-fit grid (4 columns)
- SVG icons
- Feature descriptions
- Hover effects

### Story Section
- Image gallery
- Customer testimonial
- Background images
- Asymmetric layout

### Homes Section
- Property cards grid
- Image galleries
- Property details
- Heart favorite icons
- Location information

### Gallery
- Masonry-style layout
- Responsive images
- Asymmetric grid
- Hover overlays

### Footer
- Multi-column layout
- Navigation links
- Copyright information
- Responsive stacking

## Performance Optimizations

- CSS Grid for efficient layouts
- No JavaScript dependencies
- Optimized image formats
- Lazy loading for images
- Minimal CSS specificity
- Vendor prefixes for compatibility
- Minified production CSS
- Browser caching headers

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid Level 1 support required
- Flexbox fallbacks where appropriate
- Autoprefixer for vendor prefixes
- Progressive enhancement approach
