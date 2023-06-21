<script lang="ts">
  import Track from "$lib/components/Track.svelte"
  import SpotifyWebApi from "spotify-web-api-js"
  import { onMount } from "svelte"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  const spotifyApi = new SpotifyWebApi()
  let searches: SpotifyApi.TrackObjectFull[] = []
  let query: string | undefined = undefined

  let additionalSearchParameters: string | undefined = undefined // TODO: come glieli passo questi? con un altra query a /search?
  let sidName: string = "sid"

  export let data
  $: spotifyApi
    .searchTracks(query || "", { limit: 5 })
    .then((v) => (searches = v.tracks.items))

  onMount(() => document.getElementById("searchbox")?.focus())
</script>

{#if $storedToken}
  <div class="w-full flex flex-col items-center">
    <input
      class="border-solid border-4 border-black mb-2"
      bind:value={query}
      placeholder="search for a song..."
      id="searchbox"
    />
    {#if query == undefined || query == ""}
      <span class="text-gray-300">songs will show up here</span>
    {:else}
      <span class="text-gray-300">click a song to see its transitions</span>
      {#each searches as track}
        <Track
          {track}
          overridePath={`${data.redirectTo}/?${sidName}=${track.id}${
            additionalSearchParameters || ""
          }${window.location.hash}`}
        />
      {/each}
    {/if}
  </div>
{:else}
  <LoginWithSpotify overridePath="/" />
{/if}
