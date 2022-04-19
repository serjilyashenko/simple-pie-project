# react-simple-pie

Super light weight and super simple svg pie diagram react component

## Installation

```shell
npm install react-simple-pie
```

### Use in NodeJs:

```js
import SVGPie from "react-simple-pie";
```

### Development
The code is in packages folder:
* simple-pie - package
* react-simple-pie - package

**Important:** package-lock.json includes the next:

```json
    "node_modules/react-simple-pie": {
      "resolved": "packages/react-simple-pie",
      "link": true
    },
```

That means the local version of `packages/react-simple-pie` instead of npm package.
It replaces npm module in node_modules with the local `packages/react-simple-pie` folder.
This is npm linking mechanism 

So to start the project in development mode do the next:

```bash
cd packages/react-simple-pie/
npm i
# build react-simple-pie package
npm run build
# return back to main project
cd ../..
npm i
npm start
```

Then to see changes of `packages/react-simple-pie` you should rebuild package.
