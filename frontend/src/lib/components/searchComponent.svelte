<script lang="ts">
  import SearchIcon from "virtual:icons/healthicons/magnifying-glass";
  import { searchRequestStore } from "$lib/storages/searchRequest";
  import { cubicOut } from "svelte/easing";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";

  let mouseHover = false;
  let searchFocus = false;

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

  function handleSearchClick() {
    mouseHover = true;

    if ($searchRequestStore?.length) {
      goto("/search");
    } else {
      goto("/explore");
    }
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
    console.log($searchRequestStore?.length, page.route.id);

    if ($searchRequestStore?.length > 0 && page.route.id !== "/search") {
      goto("/search");
    } else {
      goto("/explore");
    }
  }
</script>

<div
  class="not-draggable flex flex-row place-self-center"
  role="form"
  on:mouseleave={handleSearchLeave}
>
  <button on:click={handleSearchClick}>
    <SearchIcon class="h-8 w-8 ml-2 text-white hover:cursor-pointer"
    ></SearchIcon>
  </button>
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
