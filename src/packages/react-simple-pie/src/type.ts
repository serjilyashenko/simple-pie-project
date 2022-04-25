export type TPieProps = {
  values: number[];
  palette?: string[];
  borderColor?: string;
};

export type TDoughnutProps = TPieProps & {
  borderWidth?: number;
};
