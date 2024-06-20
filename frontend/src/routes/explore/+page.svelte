<script lang="ts">
    import { GetNewestList } from "$lib/wailsjs/go/main/App";
    import { onMount } from "svelte";
    import AnimeTile from "$lib/components/animeTile.svelte";
    import type { api } from "$lib/wailsjs/go/models";
    import type { Size } from "$lib/wailsjs/runtime/runtime";
    import { browser } from "$app/environment";
    
    let animeList : Promise<api.ParialAnime[]> = GetNewestList(1, 100);
</script>

<section class="grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 w-fit my-4 mx-auto place-content-center align-middle">
    {#await animeList }
        <div class="loader-container flex fixed items-center justify-center h-full w-full left-0 top-0">
            <!-- TODO: Add raphtalia at the adge of the screen -->
            <div class="loader border-t-4 border-orange-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
    {:then anilist} 
        {#if anilist.length}
            {#each anilist as anime}
                <AnimeTile anime={anime}></AnimeTile>
            {/each}
        {/if}
    {/await}
    
</section>