<script lang="ts">
  import EmptyTrack from "$lib/components/EmptyTrack.svelte"
  import Track from "$lib/components/Track.svelte"
  import SpotifyWebApi from "spotify-web-api-js"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  const spotifyApi = new SpotifyWebApi()

  let song1: string
  let song2: string
</script>

{#if $storedToken}
  <div
    class="w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8 md:space-y-0"
  >
    {#if song1}
      {#await spotifyApi.getTrack(song1) then track}
        <Track {track} />
      {/await}
    {:else}
      <EmptyTrack href="TODO" />
    {/if}

    <div class="h-fit md:w-fit">
      <span class="block md:hidden leading-3">‖<br />v </span>
      <span class="hidden md:block">=></span>
    </div>

    {#if song2}
      {#await spotifyApi.getTrack(song2) then track}
        <Track {track} />
      {/await}
    {:else}
      <EmptyTrack href="TODO" />
    {/if}
  </div>
{:else}
  <LoginWithSpotify overridePath="/" />
{/if}
