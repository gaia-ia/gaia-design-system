/**
 * Converts a number of bytes into a human-readable string with appropriate size units (e.g., KB, MB, GB).
 *
 * Uses base-1024 conversion to determine the most appropriate unit from:
 * `"Bytes"`, `"KB"`, `"MB"`, `"GB"`, and `"TB"`.
 *
 * @param {number} bytes - The number of bytes to convert.
 * @returns {string} A formatted string representing the byte value in the most suitable unit.
 * Returns `"n/a"` if the input is `0`.
 *
 * @example
 * convertBytesToReadable(0);           // "n/a"
 * convertBytesToReadable(512);         // "512 Bytes"
 * convertBytesToReadable(2048);        // "2.0 KB"
 * convertBytesToReadable(1048576);     // "1.0 MB"
 * convertBytesToReadable(1073741824);  // "1.0 GB"
 */
export function convertBytesToReadable(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) {
    return "n/a";
  }

  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  if (i === 0) {
    return bytes + " " + sizes[i];
  }

  return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
}
