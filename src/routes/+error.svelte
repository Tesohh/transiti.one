<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1>❌ Error</h1>

<p>There was a problem with loading your page</p>

<pre>
    {JSON.stringify($page, null, 2)}
  </pre>
