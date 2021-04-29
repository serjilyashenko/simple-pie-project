import { defaultPalette } from "./const";
import {
  castValuesToAngles,
  sectorPathFactory,
  TSectorCoordinate,
} from "./sector-path";

function svgWrapperFactory(element, borderColor = "black") {
  return `
        <svg viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
            <g stroke="${borderColor}" stroke-width="2px" fill="transparent">
                ${element}
            </g>
        </svg>
  `;
}

function svgSectorFactory(coordinate: TSectorCoordinate, color) {
  const d: string = sectorPathFactory(coordinate);

  return `<path fill="${color}" d="${d}"/>`;
}

export function simplePieElement(
  values,
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

if (isBrowser) {
  /* @ts-ignore */
  window.simplePie = simplePieElement;
}

export {
  sectorPathFactory,
  TSectorCoordinate,
  castValuesToAngles,
  defaultPalette,
};
