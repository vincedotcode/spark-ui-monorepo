# Spark UI Monorepo

This repository houses the **Spark UI** component library alongside a small Next.js example app.  It’s organised as a monorepo using [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces) so that the library can be developed in tandem with its documentation site.

## Structure

- `packages/spark-ui` – the component library itself.  It contains reusable React components, design tokens and Storybook stories.  See the package’s own README for installation and usage instructions.
- `apps/docs` – a minimal Next.js app that demonstrates how to consume the library.  Import your components here just like you would in any other Next.js application.

## Getting started

This monorepo uses npm workspaces to link the library package into the docs app.  To set up the repository in an environment with internet access, run:

```bash
npm install
npm run build # builds the library package
npm run dev    # starts the Next.js example app
```

If internet access is restricted, you can still explore the file structure and read through the code.  The docs app references the compiled package via the workspace, so once dependencies are installed it should “just work” with hot reloading.

## Adding more apps or packages

To add another package or application, create a new folder under `packages/` or `apps/` respectively and update the `workspaces` configuration in the root `package.json` if necessary.  Each package should be fully self‑contained with its own `package.json` and build scripts.