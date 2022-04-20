import { TSectorCoordinate } from "./type";
import { PI } from "./const";

const radius = 50;

export function piePathFactory(coordinate: TSectorCoordinate): string {
  const [radAngle0, radAngleDiff] = coordinate;

  const x0: number = radius + radius * Math.sin(radAngle0);
  const y0: number = radius - radius * Math.cos(radAngle0);

  let radAngle: number = radAngle0 + radAngleDiff;
  radAngle = radAngleDiff !== 2 * PI ? radAngle : radAngle - 0.01;

  const x: number = radius + radius * Math.sin(radAngle);
  const y: number = radius - radius * Math.cos(radAngle);

  const largeArcFlag: number = radAngleDiff > PI ? 1 : 0;
  const sweepFlag = 1;

  return `M ${radius} ${radius} L ${x0} ${y0} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${x} ${y} Z`;
}

export function doughnutSectorPathFactory(
  coordinate: TSectorCoordinate,
  inner = 0.5
): string {
  const [radAngle0, radAngleDiff] = coordinate;

  const innerRadius = radius * inner;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const x0: number = radius + radius * Math.sin(radAngle0);
  const y0: number = radius - radius * Math.cos(radAngle0);
  const xi0: number = radius + innerRadius * Math.sin(radAngle0);
  const yi0: number = radius - innerRadius * Math.cos(radAngle0);

  let radAngle: number = radAngle0 + radAngleDiff;
  radAngle = radAngleDiff !== 2 * PI ? radAngle : radAngle - 0.01;

  const x: number = radius + radius * Math.sin(radAngle);
  const y: number = radius - radius * Math.cos(radAngle);
  const xi: number = radius + innerRadius * Math.sin(radAngle);
  const yi: number = radius - innerRadius * Math.cos(radAngle);

  const largeArcFlag: number = radAngleDiff > PI ? 1 : 0;
  const innerLargeArcFlag: number = radAngleDiff > PI ? 0 : 1;
  const sweepFlag = 1;

  return `M ${radius} ${y0}
          A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${x} ${y}
          L ${xi} ${yi}
          A ${innerRadius} ${innerRadius} 0 ${innerLargeArcFlag} ${sweepFlag} ${xi0} ${yi0}
          Z`;
}

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
