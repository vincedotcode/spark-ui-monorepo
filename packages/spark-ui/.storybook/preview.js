// Import the token styles globally. This ensures design tokens are
// available in all stories without requiring each component to import them.
import '../src/tokens/tokens.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};

// Define a global toolbar for switching between light and dark themes. The
// decorator wraps each story in a div with a `data-theme` attribute. The
// component styles respond to this attribute via CSS variables declared in
// `tokens.css`.
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'contrast',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    return (
      <div data-theme={theme} style={{ padding: '1rem', minHeight: '100vh' }}>
        <Story />
      </div>
    );
  },
];