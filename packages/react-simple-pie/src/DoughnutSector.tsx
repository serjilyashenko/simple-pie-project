import { doughnutSectorPathFactory, TSectorCoordinate } from "simple-pie";

type TSectorProps = {
  coordinate: TSectorCoordinate;
  color: string;
  innerRadius: number;
};

export function DoughnutSector(props: TSectorProps): JSX.Element {
  const { coordinate, color, innerRadius } = props;

  const d: string = doughnutSectorPathFactory(coordinate, innerRadius);

  return <path fill={color} d={d} />;
}
