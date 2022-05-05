<div align="center">
  <h1>Simple Pie<br/>🥧 🍩</h1>
  <p>Super light weight and super simple svg pie/doughnut diagram</p>
</div>

<hr/>

If you are going to use simple diagram in react project, please check [React Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/react-simple-pie) out

## Installation

```shell
npm install simple-pie --save

yarn add simple-pie
```

### Use

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

Since `simplePie` and `simpleDoughnut` return regular svg, you can use it as you wish.

```js
import {simplePie, simpleDoughnut} from "react-simple-pie";

const svgPie = simplePie([2, 1, 1, 2]);
const svgDoughnut = simpleDoughnut([2, 1, 1, 2]);
```

### Options
