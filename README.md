<div align="center">
  <h1>Simple Pie Project<br/>🔧 🥧 🍩</h1>
  <p>Super light weight and super simple <strong>SVG</strong> pie/doughnut diagram packages</p>
</div>

<hr/>

This project creates simple svg pie and doughnut charts for infographics like graphs ant others.

## Packages

The project includes two npm packages:

* [Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/simple-pie)
* [React Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/react-simple-pie)

You can find them in the `/src/packages` folder. If you want to use diagram package or check it out, please look [this](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/simple-pie), and [that](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/react-simple-pie) (for the react wrapper).

Meanwhile, the current project is for simple-pie and react-simple-pie development and their demo.\
Initially `simple-pie-project` imports the last versions of `simple-pie` and `react-simple-pie` packages. And it serves to demo both pie packages.

## Demo

```bash
  npm install
  npm start
```

## `simple-pie` development

Comment npm package import\
And uncomment local `src/packages/simple-pie` import in `src/components/app.tsx` file. Like this:

```ts
// import {SimplePie} from "react-simple-pie"
import { SimplePie } from "../packages/react-simple-pie/src/simple-pie";
```

Now it is possible to change `simple-pie` sources in `/src/packages/src`.

**Important:** After development, it is important to return comments of imports back and check if it works fine with real published package.

## `react-simple-pie` development

WIP\
TODO: tradeoff

**?** There is no need to `npm install` in react-simple-pie package. It takes it from `simple-pie-project` node_modules.

## `simple-pie` npm package publish

```bash
cd src/packages/simple-pie
npm run build
npm run npm:publish
```

**Important:** After publishing it is necessary to update versions in `package.json` and `/src/packages/react-simple-pie/package.json`

## `react-simple-pie` npm package publish

```bash
cd src/packages/react-simple-pie
npm install
npm run build
npm run npm:publish
```

**Important:** After publishing it is necessary to update versions in `package.json`

### Note for myself
I created two `pathFactories` instead of one. To keep simplicity of pie diagram.
However, obvious `doughnutPathFactory` can be used to build pie with 0 inner radius
