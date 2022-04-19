import { defaultPalette } from "./const";
import { castValuesToAngles, sectorPathFactory } from "./sector-path";
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

function svgSectorFactory(coordinate: TSectorCoordinate, color: string) {
  const d: string = sectorPathFactory(coordinate);

  return `<path fill="${color}" d="${d}"/>`;
}

export function simplePieElement(
  values: number[],
  pallet = defaultPalette,
  borderColor = "black"
) {
  const pieElement: HTMLDivElement = document.createElement("div");

  pieElement.style.width = "100%";
  pieElement.style.height = "100%";

  const _values: number[] = values || new Array(pallet.length).fill(1);
  const angleCoordinates: TSectorCoordinate[] = castValuesToAngles(_values);

  const sectorElementList = angleCoordinates.map((coordinate, index) => {
    return svgSectorFactory(coordinate, pallet[index % pallet.length]);
  });

  pieElement.innerHTML = svgWrapperFactory(
    sectorElementList.join(""),
    borderColor
  );

  return pieElement;
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
  sectorPathFactory,
  TSectorCoordinate,
  castValuesToAngles,
  defaultPalette,
};
