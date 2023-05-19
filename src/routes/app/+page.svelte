<script context="module" lang="ts">
  import { browser } from "$app/environment"
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import type { PageData } from "./$types"

  type SpotifyAuth = {
    access_token: string
    expires_in: number
    token_type: string
  }
  export function load(hash: string) {
    console.log(hash)

    // const params = hash.substring(1).split("&")
    const paramObj: SpotifyAuth = {
      access_token: "",
      expires_in: 0,
      token_type: "",
    }
    // console.log("params:", params)
    // for (let i of params) {
    // }
    return paramObj
  }
  export let data: PageData
</script>

{$page.url.hash}

fangrot {data.text}
