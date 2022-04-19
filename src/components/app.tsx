import React, { useEffect, useRef } from "react";

// import { SimplePie } from "../packages/react-simple-pie/src/SimplePie";
import { simplePieElement } from "../packages/simple-pie/src/simple-pie";
import "./app.css";

export function App(): JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const svgElement = simplePieElement([2, 1, 1, 2]);
      elementRef.current.appendChild(svgElement);
    }
  });

  return (
    <div>
      <div className="app">
        <h1>React Simple Pie</h1>
        <div className="simple-pie-container">
          {/*<SimplePie values={[1, 2, 1, 2]} />*/}
          {/*<SimplePie values={[1, 1, 1]} />*/}
          <div ref={elementRef} />
        </div>
      </div>
    </div>
  );
}
