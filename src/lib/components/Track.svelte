<script lang="ts">
  import { fromURItoURL } from "$lib/utils"
  export let track: SpotifyApi.SingleTrackResponse
  export let redirectToSearches: boolean = false
</script>

<div class="flex flex-col w-3/4 md:w-80">
  <a href={redirectToSearches ? fromURItoURL(track.uri) : "//TODO"}>
    <div class="flex w-full justify-center">
      <img src={track.album.images[0].url} alt="{track.name} album cover" />
    </div>
    <span class="font-bold">{track.name}</span><br />
    <span class="text-gray-500">
      by {track.artists.map((i) => i.name).join(", ")}
    </span>
  </a>
</div>
