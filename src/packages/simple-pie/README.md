# react-simple-pie

Super light weight and super simple svg pie diagram

See the demo: https://serjilyashenko.github.io/react-simple-pie

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
