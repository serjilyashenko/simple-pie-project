# react-simple-pie

Super light weight and super simple svg pie diagram

See the demo: https://serjilyashenko.github.io/react-simple-pie

## Installation

```shell
npm install react-simple-pie --save

yarn add react-simple-pie
```

### Use

```js
import React from 'react';
import SimplePie from 'react-simple-pie';

export default function YourComponent() {
  return (
      <div style={{width: 100}}>
        <SimplePie values={[1, 2, 1, 2]} />
        
        <SimplePie values={[1, 1, 1]} />
    </div>
  );
}
```
