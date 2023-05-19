<script lang="ts">
  import { PUBLIC_SPOTIFY_CLIENT_ID } from "$env/static/public"
  import App from "$lib/components/App.svelte"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  import "../app.css"
  import { storedToken } from "../stores"
</script>

<h1>welcome bro</h1>
{#if $storedToken}
  <App />
{:else}
  <LoginWithSpotify />
{/if}
