export type TSectorCoordinate = [number, number];

export type TPieOptions = {
  pallet?: Array<string>;
  borderColor?: string;
  borderWidth?: number;
};

export type TDoughnutOptions = TPieOptions & {
  inner?: number;
};
