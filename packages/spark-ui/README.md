# Spark UI

Spark UI is a lightweight, opinionated React component library built for Next.js projects. It aims to provide a set of composable primitives that can be imported directly from the package (no copy‑pasting) while being completely open for extension. Colours, spacing and radii are defined through CSS custom properties in one place, so the look and feel of your app can be changed without touching component code.

> **No Tailwind. No frameworks. Just tokens and plain CSS.**

## Installation

Because Spark UI publishes compiled JavaScript and CSS, you can install it from your package registry of choice. You’ll need React 18 and ReactDOM as peer dependencies.

```sh
# npm
npm install spark-ui react react-dom

# yarn
yarn add spark-ui react react-dom
```

> **Note:** This repository does not include compiled output. To produce the `dist/` folder run `npm run build`. In your own projects you’ll simply install the published package.

## Usage

Import the design tokens once in your application. In a Next.js app using the App Router this could be in `app/layout.tsx`:

```tsx
// app/layout.tsx
import 'spark-ui/dist/tokens/tokens.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="light">
      <body>{children}</body>
    </html>
  );
}
```

Then import components as you need them:

```tsx
import { Button } from 'spark-ui';

export default function Example() {
  return (
    <Button variant="outline" size="lg">
      Say hello
    </Button>
  );
}
```

### Dark mode

Spark UI supports light and dark themes via a single data attribute. To enable dark mode, set `data-theme="dark"` on a parent element (e.g. `<html>` or `<body>`). All colour tokens defined in `tokens.css` will update accordingly.

```tsx
<html data-theme="dark">
  <body>
    {/* your application */}
  </body>
</html>
```

You can implement your own toggle using React state. For an end‑to‑end example see the Storybook configuration provided in this repository, which adds a toolbar to switch between light and dark themes.

### Customising tokens

The look of Spark UI is defined entirely in `tokens.css` via CSS custom properties. To override any of the colours, radii or spacing values, redefine them in your own global stylesheet *after* you’ve imported the default tokens. For example:

```css
/* app/globals.css */
@import 'spark-ui/dist/tokens/tokens.css';

:root {
  /* change the primary colour to green */
  --color-primary: 142 70% 45%;
  --color-primary-hover: 142 70% 40%;
  --color-primary-pressed: 142 70% 35%;
}
```

Because components reference the variables via `hsl(var(--color-primary))`, your overrides propagate automatically without modifying component code.

## Components

- **Button** – A flexible action component with `solid`, `outline` and `ghost` variants and three sizes (`sm`, `md`, `lg`). It supports an `asChild` prop to allow composition with other elements (e.g. to render as a link). See `src/stories/button.stories.tsx` for live examples.

More components are planned. Feel free to extend this library by following the patterns established here: create a CSS file that consumes tokens, implement a React component that uses those classes, and export it from `src/index.ts`.

## Storybook

This repository includes a preconfigured Storybook setup (see the `.storybook` directory). Running Storybook locally gives you an interactive playground with documentation. It also demonstrates the dark mode toggle. To get it running:

```sh
npm install
npm run build
npx storybook dev -p 6006
```

> Storybook’s dependencies are not bundled with this repository because fetching packages from the internet may be restricted in your environment. If you cannot install Storybook, you can still consult the example stories in `src/stories/` for usage patterns.

## License

MIT. Spark UI is free to use, modify and distribute. Fonts are provided via the SD Worx CDN under their respective licenses.