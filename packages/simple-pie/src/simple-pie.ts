import { buildPieSectors, buildDoughnutSectors } from "pie-math";
import type { TPieOptions, TDoughnutOptions } from "./type";
import { defaultDoughnutOptions, defaultPieOptions } from "./const";

const isBrowser =
  typeof window === "object" && window && window.Object === Object;

function svgWrapperFactory(
  content: string,
  borderColor: string,
  borderWidth: number,
): SVGElement {
  if (!isBrowser) {
    throw new Error("The environment doesn't look like browser");
  }

  const svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElem.setAttributeNS(null, "viewBox", "-5 -5 110 110");
  svgElem.style.display = "block";

  svgElem.innerHTML = `
    <g fill-rule="evenodd" stroke="${borderColor}" stroke-width="${borderWidth}px" fill="transparent">
       ${content}
    </g>
  `;

  return svgElem;
}

function _buildSvgElement(
  sectorPathFactory: (values: Array<number>) => Array<string>,
  values: number[],
  options: Required<TPieOptions>,
): SVGElement {
  const { pallet: palette, borderColor, borderWidth } = options;

  const _values: number[] = values || new Array(palette.length).fill(1);

  const sectorElementList = sectorPathFactory(_values).map(
    (d, index) => `<path fill="${palette[index % palette.length]}" d="${d}"/>`,
  );

  return svgWrapperFactory(
    sectorElementList.join("\n"),
    borderColor,
    borderWidth,
  );
}

export function simplePieElement(
  values: number[],
  palette?: string[],
  borderColor?: string,
  borderWidth?: number,
): SVGElement;
export function simplePieElement(
  values: number[],
  options?: TPieOptions,
): SVGElement;
export function simplePieElement(
  values: number[],
  paletteOrOptions?: string[] | TPieOptions,
  borderColor?: string,
  borderWidth?: number,
): SVGElement {
  const defaultOptions: Required<TPieOptions> = defaultPieOptions;
  let optionsMixin: TPieOptions = {};

  if (Array.isArray(paletteOrOptions)) {
    optionsMixin = {
      pallet: paletteOrOptions,
      borderColor,
      borderWidth,
    };
  } else {
    optionsMixin = paletteOrOptions || {};
  }
  const options: Required<TPieOptions> = {
    ...defaultOptions,
    ...optionsMixin,
  };

  return _buildSvgElement(buildPieSectors, values, options);
}

export function simpleDoughnutElement(
  values: number[],
  options: TDoughnutOptions = {},
): SVGElement {
  const resultOptions = { ...defaultDoughnutOptions, ...options };
  const { inner, ...pieOptions } = resultOptions;

  return _buildSvgElement(buildDoughnutSectors, values, pieOptions);
}

export const simplePie = simplePieElement;
export const simpleDoughnut = simpleDoughnutElement;
