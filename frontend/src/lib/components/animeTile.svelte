<script lang="ts">
    import type { api } from "$lib/wailsjs/go/models";

    /** @type {api.Anime} */
	export let anime: api.Anime;



    var hasHover = false;
    var targetPostition : DOMRect;

    function showInfo(event: MouseEvent) {
        hasHover = true;
        targetPostition = (event.target as HTMLAnchorElement).getBoundingClientRect()
    }

    function hideInfo() {
        hasHover = false;
    }
</script>

<a href="/anime/{anime.id}" on:mouseenter={showInfo} on:mouseleave={hideInfo} class="flex flex-col font-sans font-bold text-stone-700 mx-1 my-2 relative cursor-pointer selection:bg-none selection:text-orange-500">
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
</a>

{#if hasHover}
    <div class="absolute w-80 h-72 bg-white z-10" style="top: {targetPostition.top}px; {targetPostition.x > screenX / 2 ? ('left: ' +  (targetPostition.left - 320)) : ('left: ' +  targetPostition.right + 12) }px;"> ANIME INFO </div>
{/if}


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