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

  const doughnutSetContainer1 = useRef<HTMLElement>(null);
  const doughnutSetContainer2 = useRef<HTMLElement>(null);

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
      const svgElement = simpleDoughnutElement(
        [2, 1, 1, 2],
        0.8,
        defaultPalette,
        "black",
        "3"
      );
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
    Array.from({ length: 16 }, () =>
      Array.from({ length: Math.floor(Math.random() * 10 + 1) }, () =>
        Math.floor(Math.random() * 101)
      )
    ).forEach((set: number[]) => {
      if (doughnutSetContainer1.current) {
        const valueElement = document.createElement("div");
        const doughnut = document.createElement("div");

        valueElement.innerText = JSON.stringify(set);
        doughnut.classList.add("simple-pie-container");
        doughnut.appendChild(valueElement);
        doughnut.appendChild(
          simpleDoughnutElement(set, 0.5, defaultPalette, "transparent")
        );

        doughnutSetContainer1.current.appendChild(doughnut);
      }
    });
    [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 26].forEach((value) => {
      if (doughnutSetContainer2.current) {
        const valueElement = document.createElement("div");
        const pie = document.createElement("div");
        const doughnut = document.createElement("div");

        valueElement.innerText = String(value);
        pie.classList.add("simple-pie-container");
        doughnut.classList.add("simple-pie-container");
        doughnut.appendChild(valueElement);
        pie.appendChild(simplePieElement([value]));
        doughnut.appendChild(simpleDoughnutElement([value], 0.7));

        doughnutSetContainer2.current.appendChild(pie);
        doughnutSetContainer2.current.appendChild(doughnut);
      }
    });
  });

  return (
    <main className="app">
      <h1>React Simple Pie</h1>
      <section>
        {/*<SimplePie values={[1, 2, 1, 2]} />*/}
        {/*<SimplePie values={[1, 1, 1]} />*/}
      </section>
      <section>
        <div className="simple-pie-container" ref={borderedPieRef} />
        <div className="simple-pie-container" ref={borderLessPieRef} />
      </section>
      <section>
        <div className="simple-pie-container" ref={borderedDoughnutRef} />
        <div className="simple-pie-container" ref={borderLessDoughnutRef} />
      </section>
      <section ref={doughnutSetContainer1}></section>
      <section ref={doughnutSetContainer2}></section>
    </main>
  );
}
