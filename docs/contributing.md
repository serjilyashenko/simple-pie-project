# Contributing

There is a few conventions around code.

## Commit format

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is commit message convention.

Probably, [commitlint](https://github.com/conventional-changelog/commitlint) will be added to enforce the convention. 🧐

Some common ones are:
- `build`
- `chore`
- `ci`
- `docs`
- `feat`
- `fix`
- `perf`
- `refactor`
- `revert`
- `style`
- `test`

## Linting

TypeScript can be used in one of two ways - as a linter, or as a build tool.
`noEmit` prevents emitting files. So, TS is used to check source code's types.

`config` folder contains reusable `tsconfig.package.json`.\
`apps/hompage-legacy` has its own tsconfig

## Single Sector Visual Test

[https://simple-pie.netlify.app/test](https://simple-pie.netlify.app/test)

🚧 TBD
