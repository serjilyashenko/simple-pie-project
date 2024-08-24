# Deploy

`homepage` and `homepage-legacy-deploy` are github-actions workflows. They deploy the projects to [Netlify](https://www.netlify.com).

The flow is inspired by [Raul Melo's article](https://www.raulmelo.me/en/blog/deploying-netlify-github-actions-guide).

Key points:
- The flow watches the project's path itself and the `packages` path.
- The github-actions workflow uses [netlify-cli](https://docs.netlify.com/cli/get-started/).
  - There is no any connection between github project and Netlify.
  - The flow refers to Netlify project by `NETLIFY_SITE_ID`.
- [The official Netlify github-action that provides the CLI](https://github.com/netlify/actions/tree/375963b92b795c7b979927c580dd6f2a65ebcf28/cli)
is not used because it looks not super up to date. The last update was 2 years ago (2024-04-19).
