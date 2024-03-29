# Module systems

`cjs` (CommonJS) allows dynamic loading of modules (at run--time).\
`esm` has static imports, meaning the imports are resolved at compile-time.

Due to these differences, directly importing a CommonJS module (file) into an ESM file can lead to issues. ESM expects static
imports, but CommonJS allows for dynamic loading and runtime evaluation of code.

However, when you are dealing with npm packages, the situation changes. npm has its own system for handling module
interoperability. When you import a CommonJS module from an npm package into an ESM module, npm takes care of the
necessary conversions behind the scenes. npm can recognize CommonJS modules and provide a compatible interface for ESM
consumers.

So, that means that `cjs` is enough for npm module. However, vite has an issue during `cjs -> esm` import via npm workspaces.
Therefore, the current project generates both `esm` and `cjs`.
