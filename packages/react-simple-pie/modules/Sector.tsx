import React from "react";

import { PI } from "./const";

const radius = 50;

export type TSectorCoordinate = [number, number];

type PropsType = {
  coordinate: TSectorCoordinate;
  color: string;
};

export function Sector(props: PropsType): JSX.Element {
  const { coordinate, color } = props;
  const [radAngle0, radAngleDiff] = coordinate;

  const x0 = radius + radius * Math.sin(radAngle0);
  const y0 = radius - radius * Math.cos(radAngle0);

  let radAngle = radAngle0 + radAngleDiff;
  radAngle = radAngleDiff !== 2 * PI ? radAngle : radAngle - 0.01;

  const x = radius + radius * Math.sin(radAngle);
  const y = radius - radius * Math.cos(radAngle);

  return (
    <path
      fill={color}
      d={`
            M ${radius} ${radius}
            L ${x0} ${y0}
            A ${radius} ${radius} 0
            ${radAngleDiff > PI ? "1" : "0"} 1
            ${x} ${y}
            Z
        `}
    />
  );
}
