import type { RgbaColor } from "react-colorful";

import type { ColorFormat } from "./types";

const HEX_PATTERN = /^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const RGB_PATTERN =
  /^rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})(?:\s*[,/]\s*(\d*\.?\d+%?))?\s*\)$/i;
const HSL_PATTERN =
  /^hsla?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})%?\s*[,\s]\s*(\d{1,3})%?(?:\s*[,/]\s*(\d*\.?\d+%?))?\s*\)$/i;

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const round = (value: number, precision = 0): number => {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
};

const parseAlpha = (raw: string | undefined): number => {
  if (!raw) return 1;
  if (raw.endsWith("%")) return clamp(parseFloat(raw) / 100, 0, 1);
  return clamp(parseFloat(raw), 0, 1);
};

const expandShortHex = (hex: string): string => {
  if (hex.length === 3 || hex.length === 4) {
    return hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  return hex;
};

export const hexToRgba = (input: string): RgbaColor | null => {
  const match = HEX_PATTERN.exec(input.trim());
  if (!match) return null;
  const hex = expandShortHex(match[1]);
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
  return { r, g, b, a };
};

export const rgbaToHex = (color: RgbaColor, includeAlpha = true): string => {
  const toHex = (n: number) =>
    clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
  const base = `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  if (!includeAlpha || color.a >= 1) return base;
  return base + toHex(color.a * 255);
};

export const rgbaToRgbString = (color: RgbaColor): string => {
  const r = clamp(Math.round(color.r), 0, 255);
  const g = clamp(Math.round(color.g), 0, 255);
  const b = clamp(Math.round(color.b), 0, 255);
  if (color.a >= 1) return `rgb(${r}, ${g}, ${b})`;
  return `rgba(${r}, ${g}, ${b}, ${round(color.a, 2)})`;
};

export const rgbaToHsl = (
  color: RgbaColor,
): { h: number; s: number; l: number; a: number } => {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) h += 360;

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h,
    s: round(s * 100),
    l: round(l * 100),
    a: color.a,
  };
};

export const rgbaToHslString = (color: RgbaColor): string => {
  const { h, s, l, a } = rgbaToHsl(color);
  if (a >= 1) return `hsl(${h}, ${s}%, ${l}%)`;
  return `hsla(${h}, ${s}%, ${l}%, ${round(a, 2)})`;
};

const hslToRgba = (h: number, s: number, l: number, a: number): RgbaColor => {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const hPrime = h / 60;
  const x = c * (1 - Math.abs((hPrime % 2) - 1));

  let r1 = 0;
  let g1 = 0;
  let b1 = 0;
  if (hPrime >= 0 && hPrime < 1) [r1, g1, b1] = [c, x, 0];
  else if (hPrime >= 1 && hPrime < 2) [r1, g1, b1] = [x, c, 0];
  else if (hPrime >= 2 && hPrime < 3) [r1, g1, b1] = [0, c, x];
  else if (hPrime >= 3 && hPrime < 4) [r1, g1, b1] = [0, x, c];
  else if (hPrime >= 4 && hPrime < 5) [r1, g1, b1] = [x, 0, c];
  else if (hPrime >= 5 && hPrime < 6) [r1, g1, b1] = [c, 0, x];

  const m = lNorm - c / 2;
  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
    a,
  };
};

const parseRgbString = (input: string): RgbaColor | null => {
  const match = RGB_PATTERN.exec(input.trim());
  if (!match) return null;
  return {
    r: clamp(parseInt(match[1], 10), 0, 255),
    g: clamp(parseInt(match[2], 10), 0, 255),
    b: clamp(parseInt(match[3], 10), 0, 255),
    a: parseAlpha(match[4]),
  };
};

const parseHslString = (input: string): RgbaColor | null => {
  const match = HSL_PATTERN.exec(input.trim());
  if (!match) return null;
  const h = ((parseInt(match[1], 10) % 360) + 360) % 360;
  const s = clamp(parseInt(match[2], 10), 0, 100);
  const l = clamp(parseInt(match[3], 10), 0, 100);
  const a = parseAlpha(match[4]);
  return hslToRgba(h, s, l, a);
};

export const parseColorString = (input: string): RgbaColor | null => {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("#")) return hexToRgba(trimmed);
  if (trimmed.toLowerCase().startsWith("rgb")) return parseRgbString(trimmed);
  if (trimmed.toLowerCase().startsWith("hsl")) return parseHslString(trimmed);
  return hexToRgba(trimmed);
};

export const formatColor = (
  color: RgbaColor,
  format: ColorFormat,
  withoutAlpha = false,
): string => {
  const normalized = withoutAlpha ? { ...color, a: 1 } : color;
  switch (format) {
    case "rgb":
      return rgbaToRgbString(normalized);
    case "hsl":
      return rgbaToHslString(normalized);
    case "hex":
    default:
      return rgbaToHex(normalized, !withoutAlpha);
  }
};

export const detectFormat = (input: string): ColorFormat => {
  const trimmed = input.trim().toLowerCase();
  if (trimmed.startsWith("rgb")) return "rgb";
  if (trimmed.startsWith("hsl")) return "hsl";
  return "hex";
};
