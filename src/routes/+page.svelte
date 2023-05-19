<script lang="ts">
  import { PUBLIC_SPOTIFY_CLIENT_ID } from "$env/static/public"
  import "../app.css"

  const clientId = PUBLIC_SPOTIFY_CLIENT_ID
  const spotifyAuthEndpoint = "https://accounts.spotify.com/authorize"
  const redirectUri = "http://localhost:5173/app"
  const scopes = ["user-library-modify"].join("%20")
  const showDialog = true
  const completeAuthLink = `${spotifyAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes}&response_type=token&show_dialog=${showDialog}`
</script>

<div class="h-screen min-h-fit bg-tbg py-5 px-10">
  <!--green border-->
  <div
    class="min-h-full py-5 px-10 border-solid border-8 border-black bg-white"
  >
    <!--page space-->
    <div class="flex text-3xl">
      <!-- navbar -->
      <a class="font-bold" href="/">🎺 transiti.one</a>
    </div>

    <h1>welcome bro</h1>
    <a href={completeAuthLink}>login with spotify</a><br />
  </div>
</div>
