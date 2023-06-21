<script lang="ts">
  export let href: string
</script>

<div class="flex flex-col w-3/4 md:w-60">
  <a {href}>
    <div class="bg-tbg">
      <div
        class="flex w-full justify-center transition duration-75 ease-in-out hover:opacity-70"
      >
        <img src="therectangleofdestruction.png" alt="" />
      </div>
    </div>
    <span class="">click to add a song</span><br />
  </a>
</div>
