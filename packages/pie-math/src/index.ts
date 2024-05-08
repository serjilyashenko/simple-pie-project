import type { TSectorCoordinate } from "./type";
import { castValuesToAngles } from "./values-to-angles";
import {
  doughnutSectorPathDFactory,
  pieSectorPathDFactory,
} from "./sector-path-d-factories";

export function buildPieSectors(values: Array<number>): Array<string> {
  const angleCoordinates: Array<TSectorCoordinate> = castValuesToAngles(values);

  return angleCoordinates.map(pieSectorPathDFactory);
}

export function buildDoughnutSectors(values: Array<number>): Array<string> {
  const angleCoordinates: Array<TSectorCoordinate> = castValuesToAngles(values);

  return angleCoordinates.map(doughnutSectorPathDFactory);
}

export { defaultPalette } from "./const";
