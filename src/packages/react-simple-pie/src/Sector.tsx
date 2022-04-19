import React from "react";
import { sectorPathFactory, TSectorCoordinate } from "simple-pie";

type TSectorProps = {
  coordinate: TSectorCoordinate;
  color: string;
};

export function Sector(props: TSectorProps): JSX.Element {
  const { coordinate, color } = props;

  const d: string = sectorPathFactory(coordinate);

  return <path fill={color} d={d} />;
}
