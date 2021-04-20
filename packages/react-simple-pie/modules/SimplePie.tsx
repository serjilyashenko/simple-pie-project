import React from "react";
import { Sector, TSectorCoordinate } from "./Sector";
import { defaultPalette, PI } from "./const";

type TSimplePieProps = {
  values: number[];
  palette?: string[];
  borderColor?: string;
};

export function SimplePie(props: TSimplePieProps): JSX.Element {
  const { values, palette = defaultPalette, borderColor = "black" } = props;

  const _values: number[] = values || new Array(palette.length).fill(1);
  const sum: number = _values.reduce((s, x) => Number(s) + Number(x), 0);
  const angleDiffList: number[] = _values.map((v) => (2 * PI * v) / sum);

  const angleCoordinates: TSectorCoordinate[] = [];
  let anglePosition: number = 0;
  for (let i in angleDiffList) {
    const angleDiff: number = angleDiffList[i];
    angleCoordinates.push([anglePosition, angleDiff]);
    anglePosition += Number(angleDiff);
  }

  return (
    <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g stroke={borderColor} strokeWidth="2px" fill="transparent">
        {angleCoordinates.map(
          (coordinate: TSectorCoordinate, index: number): JSX.Element => (
            <Sector coordinate={coordinate} color={palette[index]} />
          )
        )}
      </g>
    </svg>
  );
}
