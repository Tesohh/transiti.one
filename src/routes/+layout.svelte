<script lang="ts">
  import "../app.css"
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
      <div class="flex grow flex-row-reverse text-gray-400">
        <!-- actions -->
        <a class="flex flex-row space-x-4 ml-6" href="/example">
          <span>🔎</span>
          <span class="hidden md:block">search</span>
        </a>
        <a class="flex flex-row space-x-4" href="/example">
          <span>➕</span>
          <span class="hidden md:block">new</span>
        </a>
      </div>
    </div>
    <slot />
  </div>
</div>
