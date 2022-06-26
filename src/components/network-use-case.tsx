import React, { useEffect, useState, memo } from "react";
import { debounce } from "lodash";
import Graph from "react-vis-network-graph";

import { simplePie } from "simple-pie";

function random10() {
  return Math.ceil(Math.random() * 10);
}

function getRandomPieDataUri() {
  const values = Array.from({ length: random10() }, random10);
  const element = simplePie(values);
  element.setAttribute("width", "70");
  element.setAttribute("height", "70");

  const svg = new XMLSerializer().serializeToString(element);

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

const graph = {
  nodes: [
    {
      id: 1,
      shape: "image",
      image: getRandomPieDataUri(),
      shapeProperties: { useImageSize: true },
    },
    {
      id: 2,
      shape: "image",
      image: getRandomPieDataUri(),
      shapeProperties: { useImageSize: true },
    },
    {
      id: 3,
      shape: "image",
      image: getRandomPieDataUri(),
      shapeProperties: { useImageSize: true },
    },
    {
      id: 4,
      shape: "image",
      image: getRandomPieDataUri(),
      shapeProperties: { useImageSize: true },
    },
    {
      id: 5,
      shape: "image",
      image: getRandomPieDataUri(),
      shapeProperties: { useImageSize: true },
    },
    {
      id: 6,
      shape: "image",
      image: getRandomPieDataUri(),
      shapeProperties: { useImageSize: true },
    },
    {
      id: 7,
      shape: "image",
      image: getRandomPieDataUri(),
      shapeProperties: { useImageSize: true },
    },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 6, to: 2 },
    { from: 7, to: 2 },
  ],
};

export const NetworkUseCase = memo(function NetworkUseCase(): JSX.Element {
  const [ready, setReady] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => setReady(true), 500);

    window.addEventListener(
      "resize",
      debounce(function resize() {
        setRefreshKey(random10());
      }, 500),
      {
        signal: abortController.signal,
      }
    );

    return () => abortController.abort();
  }, []);

  if (!ready) {
    return <div style={{ height: 400 }}></div>;
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Graph
        key={refreshKey}
        graph={graph}
        options={{
          edges: {
            smooth: {
              roundness: 0.45,
            },
          },
          physics: {
            barnesHut: {
              theta: 0.3,
              gravitationalConstant: -5850,
              centralGravity: 0.95,
            },
            minVelocity: 0.75,
            timestep: 0.29,
          },
          interaction: {
            zoomView: false,
            zoomSpeed: 1,
            dragView: false,
          },
        }}
      />
    </div>
  );
});
