<script lang="ts">
  import SpotifyWebApi from "spotify-web-api-js"
  import type { PageServerData } from "./$types"
  import Transition from "$lib/components/TransitionComp.svelte"
  import { storedToken } from "../../../stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  const spotifyApi = new SpotifyWebApi()
  export let data: PageServerData
</script>

{#if $storedToken}
  <div class="flex flex-col items-center w-full">
    <span class="text-gray-300"
      >transitions that contain
      {#await spotifyApi.getTrack(data.sid) then track}
        {track.name}
      {/await}
    </span>
    {#if data.transitions.length > 0}
      {#each data.transitions as transition}
        <Transition {transition} />
      {/each}
    {:else}
      no transitions found!
    {/if}
  </div>
{:else}
  <LoginWithSpotify overridePath="/" />
{/if}
