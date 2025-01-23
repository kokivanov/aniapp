<script lang="ts">
  import { GetFiltered, GetTrendingList } from "$lib/wailsjs/go/main/App";
  import AnimeTile from "$lib/components/animeTile.svelte";
  import type { api } from "$lib/wailsjs/go/models";
  import Loader from "$lib/components/loader.svelte";
  import { searchRequestStore } from "$lib/storages/searchRequest";
  import { browser } from "$app/environment";
  import { debounce } from "lodash";
  import { goto } from "$app/navigation";

  let animeList: Promise<api.ParialAnime[]>;
  const searchDebounced = debounce((req) => {
    if (!$searchRequestStore?.length) {
      goto("/explore");
    } else {
      animeList = GetFiltered(1, 100, req, null, null, null, null, null);
    }
  }, 400);

  if (browser) {
    animeList = GetFiltered(
      1,
      100,
      $searchRequestStore,
      null,
      null,
      null,
      null,
      null
    );

    searchRequestStore.subscribe((req: string) => {
      searchDebounced(req);
    });
  }
</script>

<section
  class="grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 w-fit my-4 mx-auto place-content-center align-middle"
>
  {#await animeList}
    <Loader></Loader>
  {:then anilist}
    {#if anilist?.length}
      {#each anilist as anime}
        <AnimeTile {anime}></AnimeTile>
      {/each}
    {/if}
  {/await}
</section>
