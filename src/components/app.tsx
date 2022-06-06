import React, { useEffect, useRef } from "react";

import { simplePie, simpleDoughnut } from "simple-pie";
// import {simplePie, simpleDoughnut} from "../packages/simple-pie/src/simple-pie"; // Don't commit this line uncommented. This is for Development purposes. Checkout README, please

import { SimplePie, SimpleDoughnut } from "react-simple-pie";
// import { SimplePie, SimpleDoughnut } from "../packages/react-simple-pie/src"; // Don't commit this line uncommented. This is for Development purposes. Checkout README, please

import "./app.css";

export function App(): JSX.Element {
  const doughnutSetContainer1 = useRef<HTMLElement>(null);
  const doughnutSetContainer2 = useRef<HTMLElement>(null);

  useEffect(() => {
    Array.from({ length: 16 }, () =>
      Array.from({ length: Math.floor(Math.random() * 10 + 1) }, () =>
        Math.floor(Math.random() * 101)
      )
    ).forEach((set: number[]) => {
      if (doughnutSetContainer1.current) {
        const valueElement = document.createElement("div");
        const doughnut = document.createElement("div");

        valueElement.innerText = JSON.stringify(set);
        doughnut.classList.add("pie");
        doughnut.appendChild(valueElement);
        doughnut.appendChild(
          simpleDoughnut(set, { borderColor: "transparent" })
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
        pie.classList.add("pie");
        doughnut.classList.add("pie");
        pie.appendChild(simplePie([value]));
        doughnut.appendChild(simpleDoughnut([value]));

        wrapper.appendChild(valueElement);
        wrapper.appendChild(pie);
        wrapper.appendChild(doughnut);
        doughnutSetContainer2.current.appendChild(wrapper);
      }
    });
  });

  return (
    <main className="app">
      <article>
        <h2 className="title">React Simple Pie</h2>
        <hr />

        <div className="grid">
          <section className="example-item">
            <div className="pie">
              <SimplePie values={[1, 2, 1, 2]} />
            </div>
            <pre>
              <code>{"<SimplePie values={[1, 2, 1, 2]} />"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div className="pie">
              <SimplePie values={[1, 1, 1]} borderWidth={4} />
            </div>
            <pre>
              <code>{"<SimplePie values={[1, 1, 1]} borderWidth={4} />"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div className="pie">
              <SimpleDoughnut values={[1, 2, 1, 2]} />
            </div>
            <pre>
              <code>{"<SimpleDoughnut values={[1, 2, 1, 2]} />"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div className="pie">
              <SimpleDoughnut
                values={[1, 1, 1]}
                borderWidth={4}
                borderColor="green"
                innerRadius={0.3}
              />
            </div>
            <pre>
              <code>
                {
                  '<SimpleDoughnut\n  values={[1, 1, 1]}\n  borderWidth={4}\n  borderColor="green"\n  innerRadius={0.3}\n/>'
                }
              </code>
            </pre>
          </section>
        </div>
      </article>

      <article>
        <h2 className="title">Simple Pie</h2>
        <hr />

        <div className="grid">
          <section className="example-item">
            <div
              className="pie"
              ref={(pie) => pie?.appendChild(simplePie([2, 1, 1, 2]))}
            />
            <pre>
              <code>{"simplePie([2, 1, 1, 2])"}</code>
            </pre>
          </section>

          <section className="example-item">
            <div
              className="pie"
              ref={(pie) =>
                pie?.appendChild(
                  simplePie([2, 1, 1, 2], {
                    borderColor: "transparent",
                  })
                )
              }
            />
            <pre>
              <code>
                {
                  'simplePie([2, 1, 1, 2], {\n  borderColor: "transparent",\n"})'
                }
              </code>
            </pre>
          </section>

          <section className="example-item">
            <div
              className="pie"
              ref={(pie) =>
                pie?.appendChild(
                  simpleDoughnut([2, 1, 1, 2], {
                    borderWidth: 3,
                  })
                )
              }
            />{" "}
            <pre>
              <code>
                {'simpleDoughnut([2, 1, 1, 2], {\n  borderWidth: 3,\n"})'}
              </code>
            </pre>
          </section>

          <section className="example-item">
            <div
              className="pie"
              ref={(pie) =>
                pie?.appendChild(
                  simpleDoughnut([2, 1, 1, 2], {
                    borderColor: "transparent",
                    inner: 0.5,
                  })
                )
              }
            />
            <pre>
              <code>
                {
                  'simplePie([2, 1, 1, 2], {\n  borderColor: "transparent",\n  inner: 0.5,\n"})'
                }
              </code>
            </pre>
          </section>

          <section ref={doughnutSetContainer1}></section>

          <section ref={doughnutSetContainer2}></section>
        </div>
      </article>
    </main>
  );
}
