<script lang="ts">
  import { onMount } from "svelte"
  import type { PageServerData } from "./$types"
  import SpotifyWebApi from "spotify-web-api-js"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  const spotifyApi = new SpotifyWebApi()

  export let data: PageServerData
  // let track1: SpotifyApi.SingleTrackResponse
  // let track2: SpotifyApi.SingleTrackResponse
  // onMount(async () => {
  //   if ($storedToken) {
  //     track1 = await spotifyApi.getTrack(data.song1)
  //     track2 = await spotifyApi.getTrack(data.song2)
  //   }
  // })
</script>

{#if $storedToken}
  {data.id}:
  {#await spotifyApi.getTrack(data.song1) then track}
    {track.name} by {track.artists[0].name} ->
  {/await}
  {#await spotifyApi.getTrack(data.song2) then track}
    {track.name} by {track.artists[0].name}
  {/await}
{:else}
  You need to be authenticated to view this content.<br />
  <LoginWithSpotify overridePath="/" />
{/if}
