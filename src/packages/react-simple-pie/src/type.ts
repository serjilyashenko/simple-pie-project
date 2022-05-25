export type TPieProps = {
  values: number[];
  palette?: string[];
  borderColor?: string;
  borderWidth?: number;
};

export type TDoughnutProps = TPieProps & {
  innerRadius?: number;
};
