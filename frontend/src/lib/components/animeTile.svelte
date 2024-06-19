<script lang="ts">
    import { headerSize } from "$lib/consts";
    import type { api } from "$lib/wailsjs/go/models";
    import { fade } from "svelte/transition";

    /** @type {api.Anime} */
    export let anime: api.Anime;

    const bannerWidth = 480;
    const bannerHeight = 240;

    var hasHover = false;
    var targetPostition: DOMRect;

    function showInfo(event: MouseEvent) {
        hasHover = true;
        console.log(targetPostition);
        targetPostition = (
            event.target as HTMLAnchorElement
        ).getBoundingClientRect();
    }

    function hideInfo() {
        hasHover = false;
    }
</script>

<a
    href="/anime/{anime.id}"
    on:mouseenter={showInfo}
    on:mouseleave={hideInfo}
    class="flex flex-col font-sans font-bold text-stone-700 relative cursor-pointer selection:bg-none selection:text-orange-500"
>
    <div class="w-48 h-64">
        <div
            class="relative image-container w-48 h-64 {hasHover
                ? 'z-20'
                : ''}"
        >
            <img
                class="w-48 h-64"
                src={anime.coverImage.large}
                alt={anime.title.userPreferred}
            />
        </div>
    </div>
</a>

{#if hasHover}
    <div
        in:fade={{ duration: 300 }}
        class="absolute rounded-lg shadow-lg bg-white z-30 font-sans"
        style="width: {bannerWidth}px; height: {bannerHeight}px; {targetPostition.bottom > innerHeight
            ? 'bottom: 0px;'
            : 'top: ' + targetPostition.top + 'px;'}  {targetPostition.right >
        innerWidth / 2
            ? 'left: ' + (targetPostition.left - bannerWidth - 12)
            : 'left: ' + (targetPostition.right + 12)}px;"
    >
        <p class=" text-xl">{anime.title.userPreferred}</p>
        <p class=" text-xs">{anime.title.native}</p>
        <span class="text-ellipsis line-clamp-6">{anime.description.replace(/(<([^>]+)>)/gi, '')}</span>
    </div>
    <div
        in:fade={{ duration: 300 }}
        class="absolute w-full bottom-0 left-0 h-full bg-black opacity-50 z-10"
        style="height: calc({innerHeight}px - {headerSize});"
    ></div>
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
