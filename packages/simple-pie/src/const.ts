import { defaultPalette } from 'pie-math';
import { TDoughnutOptions, TPieOptions } from "./type";

export const defaultPieOptions: Required<TPieOptions> = {
  pallet: defaultPalette,
  borderColor: "black",
  borderWidth: 1,
};

export const defaultDoughnutOptions: Required<TDoughnutOptions> = {
  ...defaultPieOptions,
  inner: 0.7,
};
