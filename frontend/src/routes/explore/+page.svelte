<script lang="ts">
    import { GetNewestList } from "$lib/wailsjs/go/main/App";
    import { onMount } from "svelte";
    import AnimeTile from "$lib/components/animeTile.svelte";
    import type { api } from "$lib/wailsjs/go/models";
    import { WindowGetSize, type Size } from "$lib/wailsjs/runtime/runtime";
    import { browser } from "$app/environment";
    import Loader from "$lib/components/loader.svelte";

    let animeList: Promise<api.ParialAnime[]> = GetNewestList(1, 100);
    var size: Size;

    function getSize() {
        if (browser) {
            WindowGetSize().then((val) => {
                size = val;
            });
        }
    }

    onMount(() => {
        if (browser) {
            getSize();
        }
    });
</script>

<section
    class="grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 w-fit my-4 mx-auto place-content-center align-middle"
>
    {#await animeList}
        <Loader windowSize={size}></Loader>
    {:then anilist}
        {#if anilist.length}
            {#each anilist as anime}
                <AnimeTile {anime}></AnimeTile>
            {/each}
        {/if}
    {/await}
</section>
