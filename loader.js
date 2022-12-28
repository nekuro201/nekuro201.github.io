export default function myImageLoader({ src, width, quality }) {
  return `https://github.com/${src}?w=${width}&q=${quality || 75}`
}