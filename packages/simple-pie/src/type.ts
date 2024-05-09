export type TPieOptions = {
  pallet?: string[];
  borderColor?: string;
  borderWidth?: number;
};

export type TDoughnutOptions = TPieOptions & {
  inner?: number;
};
