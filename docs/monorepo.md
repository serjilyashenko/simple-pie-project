# Monorepo

Simple-pie project is utilising a monorepo for a development and deployment.

The simple-pie monorepo is based on the core concepts of the Turbo [Monorepo handbook](https://turbo.build/repo/docs/handbook).

## Structure

The monorepo is split into `apps` and `packages`.

- `apps` - for separate applications and E2E tests (homepage)
- `packages` - for shared packages (internal and external)

```
simple-pie-project
├─ docs
├─ apps
│  └─ homepage-legacy
└─ packages
   ├─ pie-math
   ├─ simple-pie
   └─ react-simple-pie
```

`packages/pie-math` includes all calculations (business logic).\
`packages/simple-pie` and `packages/react-simple-pie` are external and are published to npm.
They don't include any calculations and they are just "transport" packages (read more in [package-publishing.md](./package-publishing.md)).

```mermaid
flowchart TD
  PM[packages/pie-math] --> SP[packages/simple-pie]
  PM[packages/pie-math] --> RSP[packages/react-simple-pie]
  SP --> HL[apps/homepage-legacy]
  RSP --> HL
  SP -.-> NPM[npm]
  RSP -.-> NPM
```

## Tools

| role               | tool                                                              |
|--------------------|-------------------------------------------------------------------|
| package manager    | [npm](https://www.npmjs.com) |
| workspace manager  | [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) |
| orchestration tool | [Turborepo](https://turbo.build/repo)                             |

## Installing packages

1. Make sure you're in the root directory of your monorepo.
2. Run the installation command:
```bash
npm install
```

Workspaces are [symlinked](https://en.wikipedia.org/wiki/Symbolic_link) into `node_modules`.
To check symlink state run the command:
```bash
npm ls --link=true --depth=0
```

> ⚠️ After add/remove workspaces, or change their locations on the filesystem, it is necessary  to re-run the install-command
> from root to set up workspaces again

## Commands

Remove all `node_modules`
```bash
npm run clean
```

Build all workspaces:
```bash
npm run build
```

Run all workspaces in dev mode:
```bash
npm run dev
```

Correct build order is handled by [Turborepo](https://turbo.build/repo).

```mermaid
flowchart LR
  PM[packages/pie-math] --> SP[packages/simple-pie]
  PM[packages/pie-math] --> RSP[packages/react-simple-pie]
  SP --> HL[apps/homepage-legacy]
  RSP --> HL
```

Build all package workspaces (used by ci workflow read more in [package-publishing.md](./package-publishing.md)):
```bash
npm run build:packages
```

Start releasing new npm package version (read more in [package-publishing.md](./package-publishing.md)):
```bash
npm run changeset
```

🚧 TBD
