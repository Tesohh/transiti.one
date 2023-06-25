export async function load({ url }) {
  let song1 = url.searchParams.get("sid1")
  let song2 = url.searchParams.get("sid2")
  return {
    song1,
    song2,
  }
}
