<div align="center">
  <h1>Simple Pie Monorepo<br/>🔧 🥧 🍩</h1>
  <p>Super light weight and super simple <strong>SVG</strong> pie/doughnut diagram packages</p>
</div>

<hr/>

| project           | badges                                                                                                                                                                                                                                                                             |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| homepage          | [![homepage-legacy Netlify deploy](https://github.com/serjilyashenko/simple-pie-project/actions/workflows/homepage-legacy-deploy.yml/badge.svg?branch=master)](https://github.com/serjilyashenko/simple-pie-project/actions/workflows/homepage-legacy-deploy.yml)                                                                                                                    |
| simple-pie        | ![NPM Version](https://img.shields.io/npm/v/simple-pie) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/simple-pie) <br/> ![npm bundle size](https://img.shields.io/bundlephobia/min/simple-pie) ![NPM Downloads](https://img.shields.io/npm/dm/react-simple-pie)    |
| react-simple-pie  | ![NPM Version](https://img.shields.io/npm/v/react-simple-pie) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-simple-pie) <br/> ![npm bundle size](https://img.shields.io/bundlephobia/min/react-simple-pie)                                                   |

## Overview

This project creates simple svg pie and doughnut charts for infographics like graphs ant others.

Check out the demo [here](https://simple-pie.netlify.app/)

## Motivation

Some time ago I had to integrate a network graph. And the every node of the network graph would be tiny pie chart.
The network graph library doesn't support anything else except png or svg as node inner content.
So, it is not very nice idea to keep a bunch of png or svg files for every case of data distribution.
And for obvious reasons it is not possible to use HighCharts, Chart.js or other data visualization library.
(Perhaps it would work with d3, but I'm not sure, it is an overkill to keep such big library for the such small purpose)

Well the `simple-pie` does exactly this thing. It generates tiny svg pie which can be integrated into network graph or
map or any other case, when you can't use data-visualization libraries.

![net and map cases](./docs/images/map-and-net-case.png)

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
  npm dev
```

## `simple-pie` development

Comment npm package import\
And uncomment local `src/packages/simple-pie` import in `src/components/App.tsx` file. Like this:

```ts
// import {simplePie, simpleDoughnut} from "simple-pie";
import {simplePie, simpleDoughnut} from "../packages/simple-pie/src/simple-pie";
```

Now it is possible to change `simple-pie` sources in `/src/packages/src`.

**Important:** After development, it is important to return comments of imports back and check if it works fine with real published package.

## `react-simple-pie` development

**Tradeoff:** `react-simple-pie` has `simple-pie` as dependency. Thus, it is necessary to deploy `simple-pie` version
before `react-simple-pie` can use this changes during development.

**Note** There is no need to `npm install` in react-simple-pie folder. It takes the dependencies from `simple-pie-project`
node_modules.

Comment npm package import\
And uncomment local `src/packages/simple-pie` import in `src/components/App.tsx` file. Like this:

```ts
// import {SimplePie, SimpleDoughnut} from "react-simple-pie"
import { SimplePie, SimpleDoughnut } from "../packages/react-simple-pie/src";
```

Now it is possible to change `simple-pie` sources in `/src/packages/src`.

**Important:** After development, it is important to return comments of imports back and check if it works fine with real published package.

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
npm run build
npm run npm:publish
```

**Important:** After publishing it is necessary to update versions in `package.json`

### Note for myself
I created two `pathFactories` instead of one. To keep simplicity of pie diagram.
However, obvious `doughnutPathFactory` can be used to build pie with 0 inner radius
