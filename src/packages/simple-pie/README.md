<div align="center">
  <h1>Simple Pie<br/>🥧 🍩</h1>
  <p>Super light weight and super simple svg pie/doughnut diagram</p>
</div>

<hr/>

This project creates simple svg pie and doughnut charts for infographics like graphs and others.

**Note:** If you are going to use simple diagram in react project, please check [React Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/react-simple-pie) out.\
`simple-pie` and `react-simple-pie` packages are parts of the [Simple Pie Project](https://github.com/serjilyashenko/simple-pie-project) repo

## Motivation

Some time ago I had to implement a graph chart. And the every node of the graph would be tiny pie chart.
The graph library doesn't support anything else except png or svg as node inner content.
So, it is not very nice idea to keep a bunch of png or svg files for every case of data distribution.
And for obvious reasons it is not possible to use HighCharts, Chart.js or other data visualization library.
(Perhaps it would work with d3, but I'm not sure, it is an overkill to keep such big library for the such small purpose)

Well the `simple-pie` does exactly this thing. It generates tiny svg pie which can be integrated into graph chart or
map or any other case, when you can't use data-visualization libraries.

## Installation

```shell
npm install simple-pie --save

or

yarn add simple-pie
```

## Use

```html
<div id="pie-container"></div>
<div id="doughnut-container"></div>

<script src="node_modules/simple-pie/dist/simple-pie.min.js"></script>
<script>
    const svgPieElement = simplePie([2, 1, 1, 2]);
    document.getElementById('pie-container').appendChild(svgPieElement);

    const svgDoughnutElement = simpleDoughnut([2, 1, 1, 2]);
    document.getElementById('doughnut-container').appendChild(svgDoughnutElement);
</script>
```

```js
import {simplePie, simpleDoughnut} from "simple-pie";

const svgPie = simplePie([2, 1, 1, 2]);
const svgDoughnut = simpleDoughnut([2, 1, 1, 2]);
```

Since `simplePie` and `simpleDoughnut` return regular svg, you can use it as you wish.

**Note:** svg `height` and `width` are `100%`, so it trys to extend itself to available space. Thus, you should have wrapper with dimensions for your simple-pie diagram.

## Interface

```ts
// Pie
type TPieOptions = {
  pallet?: string[];
  borderColor?: string;
  borderWidth?: number;
};

function simplePie(
  values: number[],
  options?: TPieOptions
): SVGElement;

// Doughnut
type TDoughnutOptions = TPieOptions & {
  inner?: number;                         // 0..1 - percent from outer radius
};

function simpleDoughnut(
  values: number[],
  options: TDoughnutOptions = {}
): SVGElement
```

If you need borderless diagram, just set `borderColor: "transparent"` or `borderWidth: 0`

### ❌Old version interface

The old version of pie diagram is still supported. However, it is ❌deprecated. Please use the new one.

```ts
export function simplePie(
  values: number[],
  pallet?: string[],
  borderColor?: string,
  borderWidth?: number
): SVGElement;
```

`simpleDoughnut` has only new version of the interface
