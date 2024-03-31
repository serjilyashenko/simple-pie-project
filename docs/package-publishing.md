# Package publishing

## Changeset flow

The project packages follow an automation changeset release flow.\
It uses the [github action](https://github.com/changesets/action) to your repository in the CI pipeline.

```mermaid
sequenceDiagram
    actor C as Contributor
    participant PR as Pull request
    participant GA as GitHub action
    participant M as master
    participant NPM
    Note over C,NPM: Contribution
    C->>M: package update/fix
    Note over C,NPM: Release
    C->>M: create changeset
    activate GA
      GA->>PR: Increment version, delete changeset file
    deactivate GA
    C->>PR: Approve/merge release PR
    PR->>M: merge
    activate GA
      GA->> NPM: publish
    deactivate GA
```

To start releasing new npm package version use the following command:

```bash
npm run changeset
```

This command will open an interactive prompt that guides through the process of defining changes for each package in
the monorepo.
