<div align="center">
  <h1>Simple Pie Project<br/>🥧 🍩</h1>
  <p>Super light weight and super simple svg pie/doughnut diagram</p>
</div>

<hr/>

## Installation

```shell
npm install simple-pie --save

yarn add simple-pie
```

### Use

```html
<div id="container"></div>

<script src="node_modules/simple-pie/dist/simple-pie.min.js"></script>
<script>
    const svgElement = simplePie([2, 1, 1, 2]);
    document.getElementById('container').appendChild(svgElement);
</script>
```
