<script lang="ts">
  import Track from "$lib/components/Track.svelte"
  import SpotifyWebApi from "spotify-web-api-js"
  import { onMount } from "svelte"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  const spotifyApi = new SpotifyWebApi()
  let searches: SpotifyApi.TrackObjectFull[] = []
  let query: string | undefined = undefined
  export let data
  $: spotifyApi
    .searchTracks(query || "", { limit: 5 })
    .then((v) => (searches = v.tracks.items))
  // onMount()
</script>

{#if $storedToken}
  <div class="w-full flex flex-col items-center">
    <input
      class="border-solid border-4 border-black mb-2"
      bind:value={query}
      placeholder="search for a song..."
    />
    {#if query == undefined || query == ""}
      <span class="text-gray-300">songs will show up here</span>
    {:else}
      {#each searches as track}
        <Track {track} redirectToSearches={true} />
      {/each}
    {/if}
  </div>
{:else}
  <LoginWithSpotify overridePath="/" />
{/if}
