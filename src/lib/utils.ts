export function fromURItoURL(uri: string) {
  const split = uri.split(":")
  return `https://open.spotify.com/${split[1]}/${split[2]}`
}
