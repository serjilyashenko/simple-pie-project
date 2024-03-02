import { castValuesToAngles, defaultPalette } from "simple-pie";
import type { TSectorCoordinate } from "simple-pie";
import { Sector } from "./Sector";
import type { TPieProps } from "./type";

export function SimplePie(props: TPieProps): JSX.Element {
  const {
    values,
    palette = defaultPalette,
    borderColor = "black",
    borderWidth = 1,
  } = props;

  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(values);

  return (
    <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
      <g stroke={borderColor} strokeWidth={borderWidth} fill="transparent">
        {angleCoordinates.map(
          (coordinate: TSectorCoordinate, index: number): JSX.Element => (
            <Sector
              key={index}
              coordinate={coordinate}
              color={palette[index]}
            />
          ),
        )}
      </g>
    </svg>
  );
}
