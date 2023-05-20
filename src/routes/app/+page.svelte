<script lang="ts">
  import { page } from "$app/stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  import "../../app.css"
  import { storedToken } from "../../stores"
  import SpotifyWebApi from "spotify-web-api-js"
  const spotifyApi = new SpotifyWebApi()
</script>

{#if $storedToken}
  {#await spotifyApi.getMe() then me}
    <img src={me.images?.[0].url || ""} alt="my spotify profile" />
    {me.display_name}
  {/await}
{:else}
  <LoginWithSpotify />
{/if}
