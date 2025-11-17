const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
const videoExtensions = ["mp4", "mov", "avi", "wmv", "flv", "mkv"];

/**
 * Determines whether a given file name corresponds to an image or video file
 * based on its extension.
 *
 * Supports the following extensions:
 * - **Images**: jpg, jpeg, png, gif, webp
 * - **Videos**: mp4, mov, avi, wmv, flv, mkv
 *
 * @param {string} fileName - The name of the file to check. Should include an extension (e.g., "photo.jpg").
 * @returns {'IMAGE' | 'VIDEO' | undefined} Returns `'IMAGE'` if the file is an image, `'VIDEO'` if it's a video, or `undefined` if the extension is unrecognized.
 *
 * @example
 * isImageOrVideo("photo.png"); // Returns "IMAGE"
 * isImageOrVideo("clip.mov");  // Returns "VIDEO"
 * isImageOrVideo("document.pdf"); // Returns undefined
 */
export function isImageOrVideo(fileName: string) {
  const extension = fileName.split(".").pop();

  if (imageExtensions.includes(extension as string)) return "IMAGE";
  else if (videoExtensions.includes(extension as string)) return "VIDEO";
  else return undefined;
}
