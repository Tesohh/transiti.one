<script lang="ts">
  import Track from "$lib/components/Track.svelte"
  import SpotifyWebApi from "spotify-web-api-js"
  import { onMount } from "svelte"
  import { storedToken } from "../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  const spotifyApi = new SpotifyWebApi()
  let searches: SpotifyApi.TrackObjectFull[] = []
  export let data
  onMount(async () => {
    if (data.query != null) {
      searches = (await spotifyApi.searchTracks(data.query, { limit: 5 }))
        .tracks.items
      console.log(searches)
    }
  })
</script>

{#if $storedToken}
  {#if data.query == null}
    search function to be implemented
  {:else}
    <div class="w-full flex flex-col items-center">
      {#each searches as track}
        <Track {track} redirectToSearches={true} />
      {/each}
    </div>
  {/if}
{:else}
  <LoginWithSpotify overridePath="/" />
{/if}
