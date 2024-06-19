<script lang="ts">
    import type { api } from "$lib/wailsjs/go/models";
    import { onMount } from "svelte";

    /** @type {api.Anime} */
	export let anime: api.Anime;
</script>

<div class="flex flex-col font-sans font-bold text-stone-700 mx-1 my-2 relative cursor-pointer selection:bg-none selection:text-orange-500">
    <div>
        <div class="relative rounded-xl image-container w-48 h-64">
            <div class="absolute flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity w-full h-full"> 
                <p class="h-12 w-5/6 text-ellipsis line-clamp-4 text-center">
                    {anime.title.userPreferred}
                </p>
                <br>
                {#if anime.season && anime.season}
                    <p>{anime.seasonYear} {anime.season}</p>
                {:else}
                    <p>{anime.startDate.year}</p>
                {/if}
            </div>
            <img class="" src="{anime.coverImage.large}" alt="{anime.title.userPreferred}">
        </div>
    </div>
    

</div>

<style>
    .image-container {
        overflow: hidden;
        display: inline-block; /* Adjust based on layout needs */
        position: relative;
    }

    .image-container img {
        object-fit: cover;
    }
</style>