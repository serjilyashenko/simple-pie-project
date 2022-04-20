import React, { useEffect, useRef } from "react";

// import { SimplePie } from "../packages/react-simple-pie/src/SimplePie";
import {
  simplePieElement,
  simpleDoughnutElement,
  defaultPalette,
} from "../packages/simple-pie/src/simple-pie";
import "./app.css";

export function App(): JSX.Element {
  const borderedPieRef = useRef<HTMLDivElement>(null);
  const borderLessPieRef = useRef<HTMLDivElement>(null);
  const borderedDoughnutRef = useRef<HTMLDivElement>(null);
  const borderLessDoughnutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (borderedPieRef.current) {
      const svgElement = simplePieElement([2, 1, 1, 2]);
      borderedPieRef.current.appendChild(svgElement);
    }
    if (borderLessPieRef.current) {
      const svgElement = simplePieElement(
        [2, 1, 1, 2],
        defaultPalette,
        "transparent"
      );
      borderLessPieRef.current.appendChild(svgElement);
    }
    if (borderedDoughnutRef.current) {
      const svgElement = simpleDoughnutElement([2, 1, 1, 2]);
      borderedDoughnutRef.current.appendChild(svgElement);
    }
    if (borderLessDoughnutRef.current) {
      const svgElement = simpleDoughnutElement(
        [2, 1, 1, 2],
        0.5,
        defaultPalette,
        "transparent"
      );
      borderLessDoughnutRef.current.appendChild(svgElement);
    }
  });

  return (
    <div>
      <div className="app">
        <h1>React Simple Pie</h1>
        <div className="simple-pie-container">
          {/*<SimplePie values={[1, 2, 1, 2]} />*/}
          {/*<SimplePie values={[1, 1, 1]} />*/}
          <div className="row">
            <div ref={borderedPieRef} />
            <div ref={borderLessPieRef} />
          </div>
          <div className="row">
            <div ref={borderedDoughnutRef} />
            <div ref={borderLessDoughnutRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
