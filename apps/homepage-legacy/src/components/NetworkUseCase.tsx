import { memo, useEffect } from "react";
import { DataSet } from "vis-data/peer";
import { Network } from "vis-network/peer";
import "vis-network/styles/vis-network.css";

import "./NetworkUseCase.css";

type PropsType = {
  getRandomPieDataUri: () => string;
};

export const NetworkUseCase = memo(function NetworkUseCase(
  props: PropsType,
): JSX.Element {
  const { getRandomPieDataUri } = props;

  useEffect(() => {
    const nodes = new DataSet([
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
    ]);

    // @ts-ignore
    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 6, to: 2 },
      { from: 7, to: 2 },
    ]);

    // create a network
    const container = document.getElementById("network-container");

    if (!container) {
      throw new Error("html container not found");
    }

    const data = {
      nodes: nodes,
      edges: edges,
    };
    const options = {};

    // @ts-ignore
    new Network(container, data, options);
  }, []);

  return <div id="network-container" className="network-container"></div>;
});
