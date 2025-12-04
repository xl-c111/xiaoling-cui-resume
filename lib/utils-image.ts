/**
 * Get the image path (simplified for Vercel deployment)
 */
export function getImagePath(src: string): string {
  // Simply return the src as-is since we no longer need basePath workarounds
  return src;
}
