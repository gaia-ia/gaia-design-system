/**
 * Formats a numeric value (string or number) to Brazilian Portuguese locale (`pt-BR`) using the appropriate number of decimal places.
 *
 * This function preserves the number of decimal places from the input (whether it uses a dot or comma as a decimal separator),
 * ensuring accurate formatting for display in Brazilian locales.
 *
 * @param {number | string} value - The number or numeric string to format. Can use `.` or `,` as a decimal separator.
 * @returns {string} A string representing the number formatted according to the `pt-BR` locale.
 *
 * @example
 * formatToBRLocale(1234.56);         // "1.234,56"
 * formatToBRLocale("1234.5");        // "1.234,5"
 * formatToBRLocale("1234,78");       // "1.234,78"
 * formatToBRLocale("1000");          // "1.000"
 */
export const formatToBRLocale = (value: number | string) => {
  const num = Number(value);

  // Detect decimal places from the original string (if any)
  const decimalPlaces =
    typeof value === "string" && value.includes(".")
      ? value.split(".")[1].length
      : typeof value === "string" && value.includes(",")
        ? value.split(",")[1].length
        : (num.toString().split(".")[1] || "").length;

  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(num);
};
