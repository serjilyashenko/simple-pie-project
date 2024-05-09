import type { TSectorCoordinate } from "./type";
import { castValuesToAngles } from "./values-to-angles";
import {
  pieSectorPathDFactory,
  doughnutSectorPathDFactory,
} from "./sector-path-d-factories";

export function buildPieSectors(values: Array<number>): Array<string> {
  const angleCoordinates: Array<TSectorCoordinate> = castValuesToAngles(values);

  return angleCoordinates.map(pieSectorPathDFactory);
}

export function buildDoughnutSectors(
  values: Array<number>,
  inner: number = 0.5,
): Array<string> {
  const angleCoordinates: Array<TSectorCoordinate> = castValuesToAngles(values);

  return angleCoordinates.map((coordinate) =>
    doughnutSectorPathDFactory(coordinate, inner),
  );
}

export { defaultPalette } from "./const";
