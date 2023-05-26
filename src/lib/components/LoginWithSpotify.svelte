<script lang="ts">
  import { PUBLIC_SPOTIFY_CLIENT_ID } from "$env/static/public"
  import SpotifyAPI from "spotify-web-api-js"
  import { storedToken } from "../../stores"
  import { onMount } from "svelte"
  import SpotifyLoginButton from "./SpotifyLoginButton.svelte"
  type SpotifyToken = {
    access_token: string
    expires_in: string
    token_type: string
  }
  const spotifyApi = new SpotifyAPI()
  export let overridePath: string | null = null

  const clientId = PUBLIC_SPOTIFY_CLIENT_ID
  const spotifyAuthEndpoint = "https://accounts.spotify.com/authorize"
  let redirectUri = ``
  const scopes = ["user-library-modify"].join("%20")
  const showDialog = false

  function authWithSpotify() {
    const completeAuthLink = `${spotifyAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes}&response_type=token&show_dialog=${showDialog}`
    window.location.href = completeAuthLink
  }

  function setToken() {
    const hashFromURL = window.location.hash.slice(1).split("&")
    const hash: SpotifyToken = hashFromURL.reduce(
      (r, v) => {
        if (v) {
          const [key, value] = v.split("=")
          r[key as keyof SpotifyToken] = decodeURIComponent(value)
        }
        return r
      },
      {
        access_token: "",
        expires_in: "",
        token_type: "",
      }
    )
    storedToken.set(hash.access_token)
    spotifyApi.setAccessToken($storedToken)
  }

  onMount(() => {
    let cleanPath = overridePath ? overridePath : window.location.pathname
    if (cleanPath.at(-1) == "/") cleanPath = cleanPath.slice(0, -1)
    redirectUri = encodeURIComponent(window.location.origin + cleanPath)

    setToken()
  })
</script>

<!-- <div class="w-full md:w-1/2">
  transiti.one is a webapp to help you find crossfade transitions on spotify.
  You can login with spotify and freely add any transition you like, and search
  any song you like.
</div> -->
{decodeURIComponent(redirectUri)}
<SpotifyLoginButton {authWithSpotify} />
