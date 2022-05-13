import React from "react";
import type { TSectorCoordinate } from "simple-pie";
import { castValuesToAngles, defaultPalette } from "simple-pie";
import type { TDoughnutProps } from "./type";
import { DoughnutSector } from "./DoughnutSector";

export function SimplePie(props: TDoughnutProps): JSX.Element {
  const {
    values,
    palette = defaultPalette,
    borderColor = "black",
    borderWidth = 1,
  } = props;

  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(values);

  return (
    <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g stroke={borderColor} strokeWidth="2px" fill="transparent">
        {angleCoordinates.map(
          (coordinate: TSectorCoordinate, index: number): JSX.Element => (
            <DoughnutSector
              key={index}
              coordinate={coordinate}
              color={palette[index]}
              borderWidth={borderWidth}
            />
          )
        )}
      </g>
    </svg>
  );
}
