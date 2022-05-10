<div align="center">
  <h1>Simple Pie Project<br/>🥧 🍩</h1>
  <p>Super light weight and super simple svg pie/doughnut diagram packages</p>
</div>

<hr/>

## Packages

The project includes two npm packages:

* [Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/simple-pie)
* [React Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/react-simple-pie)

You can find them in the `/src/packages` folder. If you want to use diagram package or check it out, please look [this](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/simple-pie), and [that](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/react-simple-pie) (for react wrapper).

Meanwhile, the current project is for simple-pie and react-simple-pie development and their demo.

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

Main project imports their sources as it. Without building.
`package.json` files in packages are necessary only for build and publish packages to npm.

## Publish npm packages

```bash
cd src/packages/simple-pie
npm run build
npm run npm:publish
```

```bash
cd src/packages/react-simple-pie
npm install
npm run build
npm run npm:publish
```

**Note for myself:** I created two `pathFactories` instead of one. To keep simplicity of pie diagram.
However, obvious `doughnutPathFactory` can be used to build pie with 0 inner radius
