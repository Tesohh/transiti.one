<script lang="ts">
  import { fromURItoURL } from "$lib/utils"
  export let track: SpotifyApi.SingleTrackResponse
</script>

<div class="flex flex-col">
  <a href={fromURItoURL(track.uri)}>
    <div class="flex w-full justify-center">
      <img
        src={track.album.images[0].url}
        alt="{track.name} album cover"
        width="200"
      />
    </div>
    <span class="font-bold">{track.name}</span><br />
    <span class="text-gray-500">
      by {track.artists.map((i) => i.name).join(", ")}
    </span>
  </a>
</div>
