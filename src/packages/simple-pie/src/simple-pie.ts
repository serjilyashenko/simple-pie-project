import { defaultPalette } from "./const";
import {
  castValuesToAngles,
  doughnutSectorPathFactory,
  sectorFactory,
} from "./sector-path";
import type { TSectorCoordinate } from "./type";

function svgWrapperFactory(
  element: string,
  borderColor = "black",
  borderWidth = "1"
) {
  return `
        <svg height="100%" width="100%" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
            <g stroke="${borderColor}" stroke-width="${borderWidth}px" fill="transparent">
                ${element}
            </g>
        </svg>
  `;
}

function _simplePieElement(
  sectorFactory: (coordinate: TSectorCoordinate, color: string) => string,
  values: number[],
  pallet: string[],
  borderColor: string,
  borderWidth: string
) {
  const pieElement: HTMLDivElement = document.createElement("div");

  pieElement.style.width = "100%";
  pieElement.style.height = "100%";

  const _values: number[] = values || new Array(pallet.length).fill(1);
  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(_values);

  const sectorElementList = angleCoordinates.map((coordinate, index) => {
    return sectorFactory(coordinate, pallet[index % pallet.length]);
  });

  pieElement.innerHTML = svgWrapperFactory(
    sectorElementList.join(""),
    borderColor,
    borderWidth
  );

  return pieElement;
}

export function simplePieElement(
  values: number[],
  pallet?: string[],
  borderColor?: string,
  borderWidth?: string
) {
  return _simplePieElement(
    sectorFactory,
    values,
    pallet || defaultPalette,
    borderColor || "black",
    borderWidth || "1"
  );
}

export function simpleDoughnutElement(
  values: number[],
  inner = 0.5,
  pallet?: string[],
  borderColor?: string,
  borderWidth?: string
) {
  return _simplePieElement(
    (coordinate: TSectorCoordinate, color: string) =>
      doughnutSectorPathFactory(coordinate, inner, color),
    values,
    pallet || defaultPalette,
    borderColor || "black",
    borderWidth || "1"
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

export { sectorFactory, TSectorCoordinate, castValuesToAngles, defaultPalette };
