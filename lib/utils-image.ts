/**
 * Get the full image path with basePath for GitHub Pages deployment
 */
export function getImagePath(src: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/xiaoling-cui-resume' : '';

  // If src already includes the basePath or is an external URL, return as is
  if (src.startsWith('http') || src.startsWith(basePath)) {
    return src;
  }

  // Prepend basePath for local images
  return `${basePath}${src}`;
}
