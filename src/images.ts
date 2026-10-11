// The original 800px WebP remains the fallback and the largest responsive source.
export function imageAttributes(path: string, sizes: string, eager = false): string {
  const base=import.meta.env.BASE_URL;
  const stem=path.slice(path.lastIndexOf('/')+1).replace(/\.webp$/, '');
  const sources=[320,480,640].map(w=>`${base}images/responsive/${stem}-${w}.webp ${w}w`);
  sources.push(`${base}${path} 800w`);
  return `src="${base}${path}" srcset="${sources.join(', ')}" sizes="${sizes}" loading="${eager?'eager':'lazy'}" decoding="async"${eager?' fetchpriority="high"':''}`;
}
export const cardImageSizes='(max-width: 600px) calc(100vw - 42px), (max-width: 1000px) calc((100vw - 85px) / 2), (max-width: 1230px) calc((100vw - 148px) / 3), 361px';
export const featuredImageSizes='(max-width: 600px) calc((100vw - 52px) / 2), (max-width: 1000px) calc((100vw - 114px) / 3), (max-width: 1230px) calc((100vw - 150px) / 3), 360px';
export const heroImageSizes='(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 85px) / 2), (max-width: 1320px) calc((100vw - 136px) / 2), 592px';
