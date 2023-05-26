<script lang="ts">
  import type { PageServerData } from "./$types"
  import SpotifyWebApi from "spotify-web-api-js"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  import Track from "$lib/components/Track.svelte"
  // import tailwindConfig from "../../../tailwind.config"
  // import resolveConfig from "tailwindcss/resolveConfig"
  // const config = resolveConfig(tailwindConfig)
  const spotifyApi = new SpotifyWebApi()

  export let data: PageServerData
</script>

{#if $storedToken}
  <div
    class="w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8 md:space-y-0"
  >
    {#await spotifyApi.getTrack(data.song1) then track}
      <Track {track} />
    {/await}
    <div class="h-fit md:w-fit">
      <span class="block md:hidden leading-3">‖<br />v </span>
      <span class="hidden md:block">=></span>
    </div>
    {#await spotifyApi.getTrack(data.song2) then track}
      <Track {track} />
    {/await}
  </div>
{:else}
  You need to be authenticated to view this content.<br />
  <LoginWithSpotify overridePath="/" />
{/if}
