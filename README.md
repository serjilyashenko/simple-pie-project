<div align="center">
  <h1>React Simple Pie<br/>🥧</h1>
  <p>Super light weight and super simple svg pie diagram react component</p>
</div>

<hr/>

## Installation

```shell
npm install react-simple-pie
```

### Use in NodeJs:

```js
import SVGPie from "react-simple-pie";
```

## Development
```bash
  npm install
  cd src/packages/react-simple-pie
  npm install
  cd ../simple-pie
  cd ../../..
  npm start
```

**Important:** The code is in packages folder:
* simple-pie - package
* react-simple-pie - package

Main project imports their sources as it.
`package.json` files in packages are necessary only for build and publish packages to npm.

**Note:** Be careful. main project `react-simple-pie` and `src/package/react-simple-pie` have the similar name.

## Publish npm packages

```bash
cd src/packages/simple-pie
npm run build
npm run npm:publish
```

```bash
cd src/packages/react-simple-pie
npm run build
npm run npm:publish
```

**Note for myself:** I created two pathFactories instead of one. To keep simplicity of pie diagram.
However, obvious doughnut pathFactory can be used to build pi with 0 inner radius
