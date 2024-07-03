<script lang="ts">
    import "./style.css";

    import SearchIcon from "virtual:icons/healthicons/magnifying-glass";
    import UserIcon from "virtual:icons/flowbite/user-solid";
    import CloseIcon from "virtual:icons/material-symbols/close";
    import MaximizeIcon from "virtual:icons/tabler/arrows-maximize";
    import UnmaximizeIcon from "virtual:icons/tabler/arrows-minimize";
    import MinimizeIcon from "virtual:icons/mdi/minimize";
    import {
        Quit,
        WindowGetSize,
        WindowIsMaximised,
        WindowMaximise,
        WindowMinimise,
        WindowToggleMaximise,
        WindowUnmaximise,
        type Size,
    } from "$lib/wailsjs/runtime/runtime";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import { headerSize } from "$lib/consts";

    import { cubicOut } from "svelte/easing";
    import {
        searchRequestStore,
        isSearchActiveStore,
    } from "$lib/storages/searchRequest";

    var isMaximized = false;
    var size: Size;

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

    function getSize() {
        if (browser) {
            WindowGetSize().then((val) => {
                size = val;
            });
        }
    }

    //TODO: Handle routing when search request is empty

    function handleSearchClick() {
        isSearchActiveStore.set(true);
    }

    function handleSearchLeave() {
        isSearchActiveStore.set(false);
    }

    function maximise() {
        if (browser) {
            WindowMaximise();
            isMaximized = true;
        }
    }

    function unmaximise() {
        if (browser) {
            WindowUnmaximise();
            isMaximized = false;
        }
    }

    function minimise() {
        if (browser) {
            WindowMinimise();
            isMaximized = false;
        }
    }

    function onActionClick() {
        if (browser) {
            WindowToggleMaximise();
            WindowIsMaximised().then((val) => (isMaximized = val));
        }
    }

    onMount(() => {
        if (browser) {
            WindowIsMaximised().then((val) => {
                getSize();
                isMaximized = val;
            });
        }
    });
</script>

<svelte:window on:resize={getSize} />

<div
    class="titlebar-grid w-100 bg-orange-500 grid grid-cols-5 place-content-center p-0 m-0 gap-0"
    style="height: {headerSize};"
>
    <a href="/#" class="not-draggable place-self-start">
        <img
            src="/images/logo.svg"
            class="w-8 h-8 ml-2"
            alt="Application logo"
        />
    </a>

    <div class="draggable" on:dblclick={onActionClick}></div>

    <div
        class="not-draggable flex flex-row place-self-center"
        on:mouseleave={handleSearchLeave}
    >
        <a href="/explore" on:click={handleSearchClick}>
            <SearchIcon class="h-8 w-8 ml-2 text-white"></SearchIcon>
        </a>
        {#if $searchRequestStore != "" || $isSearchActiveStore}
            <input
                bind:value={$searchRequestStore}
                transition:scaleX
                type="text"
                name="searchRequest"
                id="searchRequest"
                class="ml-2 rounded-md px-2"
            />
        {/if}
    </div>

    <div class="draggable" on:dblclick={onActionClick}></div>

    <div class="not-draggable place-self-end flex flex-row mr-2">
        <a href="/user">
            <UserIcon class="h-8 w-8 text-white"></UserIcon>
        </a>
        <button on:click={minimise}
            ><MinimizeIcon class="h-8 w-8 px-2 text-white hover:bg-orange-300"
            ></MinimizeIcon></button
        >

        {#if isMaximized}
            <button on:click={unmaximise}
                ><UnmaximizeIcon
                    class="h-8 w-8 px-2 text-white hover:bg-orange-300"
                ></UnmaximizeIcon></button
            >
        {/if}

        {#if !isMaximized}
            <button on:click={maximise}
                ><MaximizeIcon
                    class="h-8 w-8 px-2 text-white hover:bg-orange-300"
                ></MaximizeIcon></button
            >
        {/if}

        <button on:click={Quit}
            ><CloseIcon class="h-8 w-8 px-2 text-white hover:bg-orange-300"
            ></CloseIcon></button
        >
    </div>
</div>

{#if size}
    <section
        class="overflow-y-scroll"
        style="height: calc({size.h}px - {headerSize}); margin-right: 1px;"
    >
        <slot />
    </section>
{/if}

<!-- <div class="fixed h-full w-full top-0 -z-20">
    <img src="/images/background.jpg" class="fixed bottom-0 left-0 h-full w-full -z-10 opacity-80" alt="Application logo">
</div> -->

<style>
    .titlebar-grid {
        grid-template-columns: max-content 1fr max-content 1fr max-content;
        --wails-draggable: drag;
    }

    .not-draggable {
        --wails-draggable: nodrag;
    }
</style>
