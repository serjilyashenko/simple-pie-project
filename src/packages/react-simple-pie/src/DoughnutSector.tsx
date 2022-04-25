import React from "react";
import { doughnutSectorPathFactory, TSectorCoordinate } from "simple-pie";

type TSectorProps = {
  coordinate: TSectorCoordinate;
  color: string;
  borderWidth: number;
};

export function DoughnutSector(props: TSectorProps): JSX.Element {
  const { coordinate, color, borderWidth } = props;

  const d: string = doughnutSectorPathFactory(coordinate, borderWidth);

  return <path fill={color} d={d} />;
}
