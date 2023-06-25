<script lang="ts">
  import EmptyTrack from "$lib/components/EmptyTrack.svelte"
  import Track from "$lib/components/Track.svelte"
  import SpotifyWebApi from "spotify-web-api-js"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  const spotifyApi = new SpotifyWebApi()
  export let data
  function urlGen(hash: string, customSid: string) {
    return `/search?redirect=/add${data.song1 ? "&sid1=" + data.song1 : ""}${
      data.song2 ? "&sid2=" + data.song2 : ""
    }&customsid=${customSid}${hash}`
  }
</script>

{#if $storedToken}
  <div
    class="w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8 md:space-y-0 align-top"
  >
    {#if data.song1}
      {#await spotifyApi.getTrack(data.song1) then track}
        <Track {track} overridePath={urlGen(window.location.hash, "sid1")} />
      {/await}
    {:else}
      <EmptyTrack href={urlGen(window.location.hash, "sid1")} />
    {/if}

    <div class="h-fit md:w-fit">
      <span class="block md:hidden leading-3">‖<br />v </span>
      <span class="hidden md:block">=></span>
    </div>

    {#if data.song2}
      {#await spotifyApi.getTrack(data.song2) then track}
        <Track {track} overridePath={urlGen(window.location.hash, "sid2")} />
      {/await}
    {:else}
      <EmptyTrack href={urlGen(window.location.hash, "sid2")} />
    {/if}
  </div>
{:else}
  <LoginWithSpotify overridePath="/" />
{/if}
