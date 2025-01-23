<script lang="ts">
    import SearchIcon from "virtual:icons/healthicons/magnifying-glass";
    import { searchRequestStore } from "$lib/storages/searchRequest";
    import { cubicOut } from "svelte/easing";
    import { page } from "$app/stores";
    import { resolveRoute } from "$app/paths";
    import { goto } from "$app/navigation";

    function scaleX(node: HTMLElement, { duration = 300 } = {}) {
        return {
            duration,
            easing: cubicOut,
            css: (t: number) => `
            transform: scaleX(${t});
            transform-origin: left;
            opacity: ${t};
        `,
        };
    }

    let mouseHover = false;
    let searchFocus = false;

    function handleSearchClick() {
        if ($page.route.id === "/explore") mouseHover = true;
    }

    function handleSearchLeave() {
        mouseHover = false;
    }

    function handleSearchFocus() {
        searchFocus = true;
    }

    function handleSearchBlur() {
        searchFocus = false;
    }

    function handleSearchChange() {
        if ($searchRequestStore) {

            goto("/search")
        } else {
            goto('/explore')
        }
    }
</script>

<div
    class="not-draggable flex flex-row place-self-center"
    on:mouseleave={handleSearchLeave}
>
    <a href="/explore" on:click={handleSearchClick}>
        <SearchIcon class="h-8 w-8 ml-2 text-white"></SearchIcon>
    </a>
    {#if $searchRequestStore != "" || mouseHover || searchFocus}
        <input
            bind:value={$searchRequestStore}
            transition:scaleX
            type="text"
            name="searchRequest"
            id="searchRequest"
            class="ml-2 rounded-md px-2"
            on:blur={handleSearchBlur}
            on:focus={handleSearchFocus}
            on:change={handleSearchChange}
        />
    {/if}
</div>

<style>
    .not-draggable {
        --wails-draggable: nodrag;
    }
</style>
