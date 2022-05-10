import React, { useEffect, useRef } from "react";

// import { SimplePie } from "../packages/react-simple-pie/src";
import {
  simplePieElement,
  simpleDoughnutElement,
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
      const svgElement = simplePieElement([2, 1, 1, 2], {
        borderColor: "transparent",
      });
      borderLessPieRef.current.appendChild(svgElement);
    }
    if (borderedDoughnutRef.current) {
      const svgElement = simpleDoughnutElement([2, 1, 1, 2], {
        borderWidth: 3,
      });
      borderedDoughnutRef.current.appendChild(svgElement);
    }
    if (borderLessDoughnutRef.current) {
      const svgElement = simpleDoughnutElement([2, 1, 1, 2], {
        borderColor: "transparent",
      });
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
          simpleDoughnutElement(set, { borderColor: "transparent" })
        );

        doughnutSetContainer1.current.appendChild(doughnut);
      }
    });
    [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 26].forEach((value) => {
      if (doughnutSetContainer2.current) {
        const wrapper = document.createElement("div");
        const valueElement = document.createElement("div");
        const pie = document.createElement("div");
        const doughnut = document.createElement("div");

        valueElement.innerText = String(value);
        pie.classList.add("simple-pie-container");
        doughnut.classList.add("simple-pie-container");
        pie.appendChild(simplePieElement([value]));
        doughnut.appendChild(simpleDoughnutElement([value]));

        wrapper.appendChild(valueElement);
        wrapper.appendChild(pie);
        wrapper.appendChild(doughnut);
        doughnutSetContainer2.current.appendChild(wrapper);
      }
    });
  });

  return (
    <main className="app">
      <h1>React Simple Pie</h1>
      <section>
        <div className="simple-pie-container">
          {/*<SimplePie values={[1, 2, 1, 2]} />*/}
        </div>
        <div className="simple-pie-container">
          {/*<SimplePie values={[1, 1, 1]} />*/}
        </div>
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
