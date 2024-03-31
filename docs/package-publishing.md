# Package publishing

## Changeset flow

The project packages follow an automation changeset release flow.\
It uses the [github action](https://github.com/changesets/action) to your repository in the CI pipeline.

```mermaid
sequenceDiagram
    actor C as Contributor
    participant PR as Pull request
    participant M as master
    participant GA as GitHub action
    participant NPM
    Note over C,NPM: Contribution
    C->>M: package update/fix
    M--xGA: ignored
    Note over C,NPM: Release
    C->>M: create changeset
    M-->>GA: changeset detected
    GA->>PR: The release PR: Increment version, delete changeset file
    C-->>PR: Approve/merge the release PR
    PR->>M: merge the release PR
    M-->>GA: the updated version detected
    GA->> NPM: publish
```

To start releasing new npm package version use the following command:

```bash
npm run changeset
```

This command will open an interactive prompt that guides through the process of defining changes for each package in
the monorepo.
