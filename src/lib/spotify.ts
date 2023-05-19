import { VITE_SPOTIFY_CLIENT_SECRET } from "$env/static/private"
import { PUBLIC_SPOTIFY_CLIENT_ID } from "$env/static/public"
import Spotify from "spotify-api.js"

export const spotify = await Spotify.Client.create({
  refreshToken: true,
  token: {
    clientID: PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: VITE_SPOTIFY_CLIENT_SECRET,
  },
})
