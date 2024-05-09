import type { TPieProps } from "./type";
import { defaultPalette, buildPieSectors } from "pie-math";

export function SimplePie(props: TPieProps): JSX.Element {
  const {
    values,
    palette = defaultPalette,
    borderColor = "black",
    borderWidth = 1,
  } = props;

  return (
    <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g stroke={borderColor} strokeWidth={borderWidth} fill="transparent">
        {buildPieSectors(values).map((d, index) => (
          <path key={index} fill={palette[index % palette.length]} d={d} />
        ))}
      </g>
    </svg>
  );
}
