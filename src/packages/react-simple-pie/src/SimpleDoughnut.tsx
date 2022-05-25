import React from "react";
import type { TSectorCoordinate } from "simple-pie";
import { castValuesToAngles, defaultPalette } from "simple-pie";
import type { TDoughnutProps } from "./type";
import { DoughnutSector } from "./DoughnutSector";

export function SimpleDoughnut(props: TDoughnutProps): JSX.Element {
  const {
    values,
    palette = defaultPalette,
    borderColor = "black",
    innerRadius = 0.5,
    borderWidth = 1,
  } = props;

  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(values);

  return (
    <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g stroke={borderColor} strokeWidth={borderWidth} fill="transparent">
        {angleCoordinates.map(
          (coordinate: TSectorCoordinate, index: number): JSX.Element => (
            <DoughnutSector
              key={index}
              coordinate={coordinate}
              color={palette[index]}
              innerRadius={innerRadius}
            />
          )
        )}
      </g>
    </svg>
  );
}
