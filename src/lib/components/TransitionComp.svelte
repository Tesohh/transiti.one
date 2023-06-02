<script lang="ts">
  import SpotifyWebApi from "spotify-web-api-js"
  import Track from "./Track.svelte"
  import type { Transition } from "@prisma/client"
  const spotifyApi = new SpotifyWebApi()
  export let transition: Transition
</script>

<div
  class="w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8 md:space-y-0"
>
  {#await spotifyApi.getTrack(transition.song1) then track}
    <Track {track} />
  {/await}
  <div class="h-fit md:w-fit">
    <span class="block md:hidden leading-3">‖<br />v </span>
    <span class="hidden md:block">=></span>
  </div>
  {#await spotifyApi.getTrack(transition.song2) then track}
    <Track {track} />
  {/await}
</div>
