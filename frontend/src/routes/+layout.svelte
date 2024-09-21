<script lang="ts">
    import "./style.css";

    import UserIcon from "virtual:icons/flowbite/user-solid";
    import CloseIcon from "virtual:icons/material-symbols/close";
    import MaximizeIcon from "virtual:icons/tabler/arrows-maximize";
    import UnmaximizeIcon from "virtual:icons/tabler/arrows-minimize";
    import MinimizeIcon from "virtual:icons/mdi/minimize";
    import SearchComponent from "$lib/components/searchComponent.svelte";
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

    import { widnowSizeStorage } from "$lib/storages/searchRequest";

    var isMaximized = false;
    var size: Size;

    function getSize() {
        WindowGetSize().then((val) => {
            size = val;
            widnowSizeStorage.set(val);
        });
    }

    //TODO: Handle routing when search request is empty

    function maximise() {
        WindowMaximise();
        isMaximized = true;
    }

    function unmaximise() {
        WindowUnmaximise();
        isMaximized = false;
    }

    function minimise() {
        WindowMinimise();
        isMaximized = false;
    }

    function onActionClick() {
        WindowToggleMaximise();
        WindowIsMaximised().then((val) => (isMaximized = val));
    }

    if (browser) {
        onMount(() => {
            WindowIsMaximised().then((val) => {
                getSize();
                isMaximized = val;
            });
        });
    }
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

    <SearchComponent></SearchComponent>

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
        class="overflow-y-auto pb-4 selection:bg-orange-300 selection:text-white"
        style="max-height: calc({size.h}px - {headerSize}); margin-right: 1px;"
    >
        <slot />
    </section>
{/if}

<style>
    .titlebar-grid {
        grid-template-columns: max-content 1fr max-content 1fr max-content;
        --wails-draggable: drag;
    }
</style>
