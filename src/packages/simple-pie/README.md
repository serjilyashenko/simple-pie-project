<div align="center">
  <h1>Simple Pie<br/>🥧 🍩</h1>
  <p>Super light weight and super simple svg pie/doughnut diagram</p>
</div>

<hr/>

This project creates simple svg pie and doughnut charts for infographics like graphs and others.

Check out the demo [here](https://simple-pie.netlify.app/)

**Note:** If you are going to use simple diagram in react project, please check [React Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/react-simple-pie) out.\
`simple-pie` and `react-simple-pie` packages are parts of the [Simple Pie Project](https://github.com/serjilyashenko/simple-pie-project) repo

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
