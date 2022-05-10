import {
  defaultDoughnutOptions,
  defaultPalette,
  defaultPieOptions,
} from "./const";
import {
  castValuesToAngles,
  doughnutSectorPathFactory,
  sectorPathFactory,
} from "./sector-path";
import type { TSectorCoordinate, TPieOptions, TDoughnutOptions } from "./type";

function svgWrapperFactory(
  element: string,
  borderColor: string,
  borderWidth: number
): SVGElement {
  const svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElem.setAttributeNS(null, "viewBox", "-5 -5 110 110");
  svgElem.style.display = "block";

  svgElem.innerHTML = `
    <g fill-rule="evenodd" stroke="${borderColor}" stroke-width="${borderWidth}px" fill="transparent">
       ${element}
    </g>
  `;

  return svgElem;
}

function _simplePieElement(
  pathFactory: (coordinate: TSectorCoordinate) => string,
  values: number[],
  options: Required<TPieOptions>
): SVGElement {
  const { pallet, borderColor, borderWidth } = options;

  const _values: number[] = values || new Array(pallet.length).fill(1);
  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(_values);

  const sectorElementList = angleCoordinates.map((coordinate, index) => {
    const d: string = pathFactory(coordinate);

    return `<path fill="${pallet[index % pallet.length]}" d="${d}"/>`;
  });

  return svgWrapperFactory(
    sectorElementList.join(""),
    borderColor,
    borderWidth
  );
}

export function simplePieElement(
  values: number[],
  pallet?: string[],
  borderColor?: string,
  borderWidth?: number
): SVGElement;
export function simplePieElement(
  values: number[],
  options?: TPieOptions
): SVGElement;
export function simplePieElement(
  values: number[],
  palletOrOptions?: string[] | TPieOptions,
  borderColor?: string,
  borderWidth?: number
): SVGElement {
  const defaultOptions: Required<TPieOptions> = defaultPieOptions;
  let optionsMixin: TPieOptions = {};

  if (Array.isArray(palletOrOptions)) {
    optionsMixin = {
      pallet: palletOrOptions,
      borderColor,
      borderWidth,
    };
  } else {
    optionsMixin = palletOrOptions || {};
  }
  const options: Required<TPieOptions> = {
    ...defaultOptions,
    ...optionsMixin,
  };

  return _simplePieElement(sectorPathFactory, values, options);
}

export function simpleDoughnutElement(
  values: number[],
  options: TDoughnutOptions = {}
): SVGElement {
  const resultOptions = { ...defaultDoughnutOptions, ...options };
  const { inner, ...pieOptions } = resultOptions;

  return _simplePieElement(
    (coordinate: TSectorCoordinate) =>
      doughnutSectorPathFactory(coordinate, inner),
    values,
    pieOptions
  );
}

const isBrowser =
  typeof window === "object" && window && window.Object === Object;

declare global {
  interface Window {
    simplePie: typeof simplePieElement | undefined;
    simpleDoughnut: typeof simpleDoughnutElement | undefined;
  }
}

if (isBrowser) {
  window.simplePie = simplePieElement;
  window.simpleDoughnut = simpleDoughnutElement;
}

export const simplePie = simplePieElement;
export const simpleDoughnut = simpleDoughnutElement;

export {
  sectorPathFactory,
  TSectorCoordinate,
  TPieOptions,
  TDoughnutOptions,
  castValuesToAngles,
  defaultPalette,
};
