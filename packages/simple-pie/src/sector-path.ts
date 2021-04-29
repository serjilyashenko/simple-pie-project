import { PI } from "./const";

const radius = 50;

export type TSectorCoordinate = [number, number];

export function sectorPathFactory(coordinate: TSectorCoordinate): string {
  const [radAngle0, radAngleDiff] = coordinate;

  const x0: number = radius + radius * Math.sin(radAngle0);
  const y0: number = radius - radius * Math.cos(radAngle0);

  let radAngle: number = radAngle0 + radAngleDiff;
  radAngle = radAngleDiff !== 2 * PI ? radAngle : radAngle - 0.01;

  const x: number = radius + radius * Math.sin(radAngle);
  const y: number = radius - radius * Math.cos(radAngle);

  const largeArcFlag: number = radAngleDiff > PI ? 1 : 0;
  const sweepFlag: number = 1;

  return `M ${radius} ${radius} L ${x0} ${y0} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${x} ${y} Z`;
}

export function castValuesToAngles(values: number[]): TSectorCoordinate[] {
  const sum: number = values.reduce((s, x) => Number(s) + Number(x), 0);
  const angleDiffList: number[] = values.map((v) => (2 * PI * v) / sum);

  const angleCoordinates: TSectorCoordinate[] = [];
  let anglePosition: number = 0;
  for (let i in angleDiffList) {
    const angleDiff: number = angleDiffList[i];
    angleCoordinates.push([anglePosition, angleDiff]);
    anglePosition += Number(angleDiff);
  }

  return angleCoordinates;
}
