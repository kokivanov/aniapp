<script lang="ts">
    import { page } from "$app/stores";
    import Loader from "$lib/components/loader.svelte";
    import { GetFullInfo } from "$lib/wailsjs/go/main/App";
    import type { api } from "$lib/wailsjs/go/models";
    import { onMount } from "svelte";

    // Access the id parameter from the route
    let id: number;
    let contentEl: HTMLParagraphElement;

    $: id = +$page.params.id;

    let animePromise: Promise<api.FullAnime> | undefined = undefined;

    onMount(() => {
        animePromise = GetFullInfo(id);
    });
</script>

<section>
    {#if animePromise}
        {#await animePromise}
            <Loader></Loader>
        {:then anime}
            <div class="w-full">
                <div
                    class="w-full h-40 overflow-clip -z-10 top-0 image-container"
                >
                    <img
                        class="w-full"
                        src={anime.bannerImage}
                        alt={anime.title.english}
                    />
                </div>

                <div class="flex mx-8 cover-row -mt-14">
                    <img
                        class="z-10 max-w-96 row-start-1 h-fit object-contain row-end-2 border-4 border-orange-400 row-span-2"
                        src={anime.coverImage.large}
                        alt={anime.title.english}
                    />

                    <div class="mt-14">
                        <p
                            class="mx-4 font-sans font-bold text-stone-600 text-2xl mb-1"
                        >
                            {anime.title.userPreferred}
                        </p>
                        <p
                            class="mx-4 font-sans font-regular text-stone-400 text-lg mb-2"
                        >
                            {anime.title.native}
                        </p>
                        <p class="mx-4 font-sans" bind:this={contentEl}>
                            {@html anime.description}
                        </p>
                    </div>
                </div>
            </div>
        {:catch err}
            <p>{err}</p>
        {/await}
    {/if}
</section>

<style>
    .cover-row {
        width: fit-content;
    }
    .image-container {
        position: relative;
        display: inline-block;
    }

    .image-container img {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    .image-container::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip-path: inherit; /* Use the same clipping as the image */
        background: linear-gradient(to bottom, transparent 0%, white 100%);
    }
</style>
