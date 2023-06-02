<script lang="ts">
  import { page } from "$app/stores"
  import LoginWithSpotify from "$lib/components/LoginWithSpotify.svelte"
  import "../app.css"
  import { storedToken } from "../stores"
</script>

<div
  class="h-screen min-h-fit {$page.error
    ? 'bg-red-500'
    : 'bg-tbg'} py-3 px-4 md:py-5 md:px-10"
>
  <!--green border-->
  <div
    class="min-h-full py-5 px-10 border-solid border-8 border-black bg-white"
  >
    <!--page space-->
    <div class="flex text-sm md:text-3xl">
      <!-- navbar -->
      <a class="font-bold" href="/">🎺 transiti.one</a>
      {#if $storedToken}
        <div class="flex grow flex-row-reverse text-gray-400">
          <!-- actions -->
          <a
            class="flex flex-row space-x-4 ml-6"
            href="/search?redirect=/search/transitions{window.location.hash}"
          >
            <span>🔎</span>
            <span class="hidden md:block">search</span>
          </a>
          <a class="flex flex-row space-x-4" href="/example">
            <span>➕</span>
            <span class="hidden md:block">new</span>
          </a>
        </div>
      {:else}<div />{/if}
    </div>

    <slot />
  </div>
</div>
