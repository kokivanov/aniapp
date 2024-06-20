
<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { GetFullInfo } from '$lib/wailsjs/go/main/App';
    import type { api } from '$lib/wailsjs/go/models';
    import { onMount } from 'svelte';

    // Access the id parameter from the route
    let id : number;
    
    $: id = +$page.params.id;

    let animePromise : Promise<api.FullAnime> | undefined = undefined;


    onMount(() => {
        animePromise = GetFullInfo(id)
    })

</script>

<section class="w-full h-full">
    {#if animePromise}    
        {#await animePromise}
            <div class="loader-container flex fixed items-center justify-center h-full w-full left-0 top-0">
                <!-- TODO: Add raphtalia at the adge of the screen -->
                <div class="loader border-t-4 border-orange-500 rounded-full w-16 h-16 animate-spin"></div>
            </div>
        {:then anime} 
            <div class="w-full h-40 overflow-clip">
                <img class="" src="{anime.bannerImage}" alt="{anime.title.english}">
            </div>
        {:catch err}
            <p>{err}</p>
        {/await}
    {/if}
</section>

