import { TSectorCoordinate } from "./type";
import { PI } from "./const";

const radius = 50;

function isFullCircle(radAngleDiff: number): boolean {
  return Math.ceil(radAngleDiff * 100) >= Math.ceil(2 * PI * 100);
}

export function pieSectorPathDFactory(coordinate: TSectorCoordinate): string {
  const [radAngle0, radAngleDiff] = coordinate;

  if (isFullCircle(radAngleDiff)) {
    // draw full circle with two curves
    return `M ${radius} 0
            A ${radius} ${radius} 0 1 1 ${radius} ${2 * radius}
            A ${radius} ${radius} 0 1 1 ${radius} 0 Z`;
  }

  const radAngle: number = radAngle0 + radAngleDiff;

  const x0: number = radius + radius * Math.sin(radAngle0);
  const y0: number = radius - radius * Math.cos(radAngle0);
  const x: number = radius + radius * Math.sin(radAngle);
  const y: number = radius - radius * Math.cos(radAngle);

  const largeArcFlag: number = radAngleDiff > PI ? 1 : 0;
  const sweepFlag = 1;

  return `M ${radius} ${radius}
          L ${x0} ${y0}
          A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${x} ${y} Z`;
}

export function doughnutSectorPathDFactory(
  coordinate: TSectorCoordinate,
  inner: number,
): string {
  const [radAngle0, radAngleDiff] = coordinate;
  const innerRadius = radius * inner;

  if (isFullCircle(radAngleDiff)) {
    // draw full circle with two curves and cut another circle inside with fill-rule="evenodd" in parent <g> element
    // prettier-ignore
    return `M ${radius} 0
            A ${radius} ${radius} 0 1 1 ${radius} ${2 * radius}
            A ${radius} ${radius} 0 1 1 ${radius} 0 Z
            M ${radius} ${radius - innerRadius}
            A ${innerRadius} ${innerRadius} 0 1 0 ${radius} ${radius + innerRadius}
            A ${innerRadius} ${innerRadius} 0 1 0 ${radius} ${radius - innerRadius} Z`;
  }

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

  return `M ${x0} ${y0}
          A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}
          L ${xi} ${yi}
          A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${xi0} ${yi0}
          Z`;
}
