import { defaultPalette } from "./const";
import {
  castValuesToAngles,
  doughnutSectorPathFactory,
  piePathFactory,
} from "./sector-path";
import type { TSectorCoordinate } from "./type";

function svgWrapperFactory(element: string, borderColor = "black") {
  return `
        <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
            <g stroke="${borderColor}" stroke-width="2px" fill="transparent">
                ${element}
            </g>
        </svg>
  `;
}

function _simplePieElement(
  pathFactory: (coordinate: TSectorCoordinate) => string,
  values: number[],
  pallet: string[],
  borderColor: string
) {
  const pieElement: HTMLDivElement = document.createElement("div");

  pieElement.style.width = "100%";
  pieElement.style.height = "100%";

  const _values: number[] = values || new Array(pallet.length).fill(1);
  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(_values);

  const sectorElementList = angleCoordinates.map((coordinate, index) => {
    const d: string = pathFactory(coordinate);

    return `<path fill="${pallet[index % pallet.length]}" d="${d}"/>`;
  });

  pieElement.innerHTML = svgWrapperFactory(
    sectorElementList.join(""),
    borderColor
  );

  return pieElement;
}

export function simplePieElement(
  values: number[],
  pallet = defaultPalette,
  borderColor = "black"
) {
  return _simplePieElement(piePathFactory, values, pallet, borderColor);
}

export function simpleDoughnutElement(
  values: number[],
  inner = 0.5,
  pallet = defaultPalette,
  borderColor = "black"
) {
  return _simplePieElement(
    (coordinate: TSectorCoordinate) =>
      doughnutSectorPathFactory(coordinate, inner),
    values,
    pallet,
    borderColor
  );
}

const isBrowser =
  typeof window === "object" && window && window.Object === Object;

declare global {
  interface Window {
    simplePie: typeof simplePieElement | undefined;
  }
}

if (isBrowser) {
  window.simplePie = simplePieElement;
}

export {
  piePathFactory,
  TSectorCoordinate,
  castValuesToAngles,
  defaultPalette,
};
