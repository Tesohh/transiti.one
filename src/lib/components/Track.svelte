<script lang="ts">
  import { fromURItoURL } from "$lib/utils"
  export let track: SpotifyApi.SingleTrackResponse
  export let overridePath: string = ""
</script>

<!--  -->
<div class="flex flex-col w-3/4 md:w-60 h-full">
  <a href={overridePath ? overridePath : fromURItoURL(track.uri)}>
    <div class="bg-tbg">
      <div
        class="flex w-full justify-center transition duration-75 ease-in-out hover:opacity-70"
      >
        <img src={track.album.images[0].url} alt="{track.name} album cover" />
      </div>
    </div>
    <span class="font-bold">{track.name}</span><br />
    <span class="text-gray-500">
      by {track.artists.map((i) => i.name).join(", ")}
    </span>
  </a>
</div>
