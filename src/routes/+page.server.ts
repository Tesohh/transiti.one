import prisma from "$lib/prisma"
import { spotify } from "$lib/spotify"
import { UserClient } from "spotify-api.js"
import type { PageServerLoad } from "./$types"
export const load: PageServerLoad = async () => {
  const track = (await spotify.tracks.search("I Ain't Got Time!"))[0]
  console.log(track)
  return { text: track.name }
}
