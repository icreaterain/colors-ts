import { HexColour } from "../color-reducer";

export const isHexColour = (value: string): value is HexColour => {
    const hexPattern = /^#[0-9A-Fa-f]{6}$/;
    return hexPattern.test(value);
}

export const runIfHex = (value: string, cb: (checkedHexColorValue: HexColour) => void) => {
    if (isHexColour(value))
        cb(value);
    else
        console.warn('Invalid hex color format:', value);
}