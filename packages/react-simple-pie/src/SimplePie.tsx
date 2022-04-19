import React from "react";
import {
  castValuesToAngles,
  defaultPalette,
  TSectorCoordinate,
} from "simple-pie";
import { Sector } from "./Sector";

type TSimplePieProps = {
  values: number[];
  palette?: string[];
  borderColor?: string;
};

export function SimplePie(props: TSimplePieProps): JSX.Element {
  const { values, palette = defaultPalette, borderColor = "black" } = props;

  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(values);

  return (
    <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g stroke={borderColor} strokeWidth="2px" fill="transparent">
        {angleCoordinates.map(
          (coordinate: TSectorCoordinate, index: number): JSX.Element => (
            <Sector
              key={index}
              coordinate={coordinate}
              color={palette[index]}
            />
          )
        )}
      </g>
    </svg>
  );
}

export { Sector, TSectorCoordinate };