import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import Graph from "react-vis-network-graph";

import "./network-use-case.css";

type PropsType = {
  getRandomPieDataUri: () => string;
};

export function NetworkUseCase(props: PropsType): JSX.Element {
  const { getRandomPieDataUri } = props;

  const [ready, setReady] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    window.addEventListener(
      "resize",
      debounce(function resize() {
        setRefreshKey(Math.ceil(Math.random() * 10));
      }, 500),
      {
        signal: abortController.signal,
      }
    );

    return () => abortController.abort();
  }, []);

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

  return (
    <div className="network-container">
      {ready && (
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
      )}
    </div>
  );
}
