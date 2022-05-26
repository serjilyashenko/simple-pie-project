<div align="center">
  <h1>React Simple Pie<br/>⚛️ 🥧 🍩</h1>
  <p>Super light weight and super simple svg pie/doughnut diagram</p>
</div>

This project creates simple svg pie and doughnut charts for infographics like graphs and others.

Note: If you are going to use simple diagram in not react project, please check [Simple Pie](https://github.com/serjilyashenko/react-simple-pie/tree/master/src/packages/simple-pie) out.
`simple-pie` and `react-simple-pie` packages are parts of the [Simple Pie Project](https://github.com/serjilyashenko/simple-pie-project) repo

## Installation

```shell
npm install react-simple-pie --save

# or

yarn add react-simple-pie
```

### Use

```js
import React from 'react';
import {SimplePie, SimpleDoughnut} from "react-simple-pie"

export default function YourComponent() {
  return (
    <section>
      <div className="simple-pie-container">
        <SimpleDoughnut values={[1, 2, 1, 2]} />
      </div>*/}
      <div className="simple-pie-container">
        <SimpleDoughnut values={[1, 1, 1]} borderWidth={4} borderColor="green" />
      </div>
    </section>
  );
}
```
