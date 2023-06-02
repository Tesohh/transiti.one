<script lang="ts">
  import type { PageServerData } from "./$types"
  import SpotifyWebApi from "spotify-web-api-js"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  import Track from "$lib/components/Track.svelte"
  import Transition from "$lib/components/TransitionComp.svelte"
  // import tailwindConfig from "../../../tailwind.config"
  // import resolveConfig from "tailwindcss/resolveConfig"
  // const config = resolveConfig(tailwindConfig)
  const spotifyApi = new SpotifyWebApi()
  export let data: PageServerData
</script>

{#if $storedToken}
  <Transition transition={data} />
{:else}
  You need to be authenticated to view this content.<br />
  <LoginWithSpotify overridePath="/" />
{/if}
