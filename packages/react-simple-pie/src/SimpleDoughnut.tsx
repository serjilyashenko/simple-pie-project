import { defaultPalette, buildDoughnutSectors } from "pie-math";
import type { TDoughnutProps } from "./type";

export function SimpleDoughnut(props: TDoughnutProps): JSX.Element {
  const {
    values,
    palette = defaultPalette,
    borderColor = "black",
    innerRadius = 0.5,
    borderWidth = 1,
  } = props;

  return (
    <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g stroke={borderColor} strokeWidth={borderWidth} fill="transparent">
        {buildDoughnutSectors(values, innerRadius).map((d, index) => (
          <path key={index} fill={palette[index % palette.length]} d={d} />
        ))}
      </g>
    </svg>
  );
}
