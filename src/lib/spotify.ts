import {
  VITE_SPOTIFY_CLIENT_ID,
  VITE_SPOTIFY_CLIENT_SECRET,
} from "$env/static/private"
import Spotify from "spotify-api.js"

export const spotify = await Spotify.Client.create({
  refreshToken: true,
  token: {
    clientID: VITE_SPOTIFY_CLIENT_ID,
    clientSecret: VITE_SPOTIFY_CLIENT_SECRET,
  },
})
