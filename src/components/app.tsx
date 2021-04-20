import React from "react";

import { SimplePie } from "react-simple-pie";
import "./app.css";

export function App(): JSX.Element {
  return (
    <div>
      <div className="app">
        <h1>React Simple Pie</h1>
        <div className="simple-pie-container">
          <SimplePie values={[1, 2, 1, 2]} />
          <SimplePie values={[1, 1, 1]} />
        </div>
      </div>
    </div>
  );
}
