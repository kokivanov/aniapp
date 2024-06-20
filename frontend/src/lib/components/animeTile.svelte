<script lang="ts">
    import type { api } from "$lib/wailsjs/go/models";
    import {StatusToReadable, addNumberSuffix, toTitleCase} from '$lib/helpers'
    import MarkIcon from "virtual:icons/ic/outline-watch-later"
    import UnmarkIcon from "virtual:icons/ic/round-watch-later"

    /** @type {api.Anime} */
    export let anime: api.ParialAnime;

    var hasHover = false;
    var targetPostition: DOMRect;

    var isMarked = false

    function showInfo(event: MouseEvent) {
        hasHover = true;
        targetPostition = (
            event.target as HTMLAnchorElement
        ).getBoundingClientRect();
    }

    function hideInfo() {
        hasHover = false;
    }

    function toggleMark() {
        isMarked = !isMarked
    }
</script>

<div
    
    on:mouseenter={showInfo}
    on:mouseleave={hideInfo}
    class="flex flex-col  relative cursor-pointer selection:bg-none selection:text-orange-500 mx-3 my-2 z-0"
>
    <div class="w-48 h-64">
        <div
            class="relative image-container border-2 border-stone-400 hover:border-orange-500 w-48 h-64 {hasHover
                ? 'z-20'
                : ''}"
        >

        <div class="absolute bg-black bg-opacity-80 font-bold text-white opacity-0 hover:opacity-100 transition-opacity w-full h-full">
            {#if isMarked}
            <button on:click={toggleMark}>
                <UnmarkIcon  class="absolute right-0 top-0 mr-2 mt-2 z-10 text-orange-500"></UnmarkIcon>
            </button>
            {:else}
            <button on:click={toggleMark}>
                <MarkIcon  class="absolute right-0 top-0 mr-2 mt-2 z-10"></MarkIcon>
            </button>
            {/if}
            <a href="/anime/{anime.id}" class="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                <p class="h-12 w-5/6 text-ellipsis line-clamp-4 text-center">
                    {anime.title.userPreferred}
                </p>
                <br>
                {#if anime.season && anime.season}
                    <p>{toTitleCase(anime.season)} {addNumberSuffix(anime.seasonYear + "")}</p>
                {:else}
                    <p>{addNumberSuffix(anime.startDate.year + "")}</p>
                {/if}
                <p class="text-xs">Score: {anime.averageScore}</p>
            </a>

        </div>
        <div class="absolute font-sans font-semibold text-white text-xs rounded-r-md rounded-b-none bottom-0 left-0 {anime.status == 'FINISHED' ? 'bg-green-500' : 'bg-purple-500'}">
            <p class="mx-2">{StatusToReadable(anime.status)}</p>
        </div>
        <img class="" src="{anime.coverImage.large}" alt="{anime.title.userPreferred}">
            <img
                class="w-48 h-64"
                src={anime.coverImage.large}
                alt={anime.title.english}
            />
        </div>
    </div>
</div>

<!-- {#if hasHover}
    <div
        in:fade={{ duration: 300 }}
        class="absolute w-full bottom-0 left-0 h-full bg-black opacity-50 z-10"
        style="height: calc({innerHeight}px - {headerSize});"
    ></div>
{/if} -->

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
