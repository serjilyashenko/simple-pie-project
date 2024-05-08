import { TSectorCoordinate } from "./type";
import { PI } from "./const";

export function castValuesToAngles(values: number[]): TSectorCoordinate[] {
  const sum: number = values.reduce((s, x) => Number(s) + Number(x), 0);
  const angleDiffList: number[] = values.map((v) => (2 * PI * v) / sum);

  const angleCoordinates: TSectorCoordinate[] = [];
  let anglePosition = 0;
  for (const i in angleDiffList) {
    const angleDiff: number = angleDiffList[i];
    angleCoordinates.push([anglePosition, angleDiff]);
    anglePosition += Number(angleDiff);
  }

  return angleCoordinates;
}
