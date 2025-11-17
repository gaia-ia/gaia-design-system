// based on https://github.com/lukeed/clsx/blob/master/src/index.js

type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassValue[]
  | Record<string, unknown>;

/**
 * Converts a class value into a normalized string.
 *
 * Accepts strings, numbers, booleans, null, undefined,
 * arrays of class values, or objects whose truthy keys
 * should be included as class names.
 *
 * @param {ClassValue} value - The value to normalize into a class string.
 * @returns {string} A space-separated list of class names.
 */
function toVal(value: ClassValue): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toVal).filter(Boolean).join(" ");
  }

  if (value && typeof value === "object") {
    return Object.keys(value)
      .filter((key) => Boolean((value as Record<string, unknown>)[key]))
      .join(" ");
  }

  return "";
}

/**
 * Concatenates a list of class names into a single string, filtering out
 * falsy values. Useful for conditionally applying CSS classes in a clean,
 * readable manner.
 *
 * The `ClassValue` type typically includes strings, numbers, arrays, or
 * objects with boolean values to determine inclusion.
 *
 * @param {...ClassValue[]} values - A list of class values which can be strings,
 * arrays, or objects. Falsy values (like `false`, `null`, `undefined`, `0`, `''`)
 * are ignored.
 * @returns {string} A space-separated string of valid class names.
 *
 * @example
 * clsx('btn', 'btn-primary'); // 'btn btn-primary'
 *
 * @example
 * clsx('btn', false && 'hidden'); // 'btn'
 *
 * @example
 * clsx('btn', ['rounded', null, 'shadow']); // 'btn rounded shadow'
 *
 * @example
 * clsx('btn', { 'btn-active': true, 'btn-disabled': false }); // 'btn btn-active'
 */
export function clsx(...values: ClassValue[]): string {
  return values.map(toVal).filter(Boolean).join(" ");
}

export default clsx;
