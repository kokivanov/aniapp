<script lang="ts">
    import './style.css'

    import DownloadsIcon from 'virtual:icons/mingcute/download-3-fill'
    import NomeIcon from 'virtual:icons/ph/tent-fill'
    import SearchIcon from 'virtual:icons/healthicons/magnifying-glass'
    import UserIcon from 'virtual:icons/flowbite/user-solid'
    import CloseIcon from 'virtual:icons/material-symbols/close'
    import MaximizeIcon from 'virtual:icons/tabler/arrows-maximize'
    import UnmaximizeIcon from 'virtual:icons/tabler/arrows-minimize'
    import MinimizeIcon from 'virtual:icons/mdi/minimize'
    import { Quit, WindowGetSize, WindowIsMaximised, WindowMaximise, WindowMinimise, WindowToggleMaximise, WindowUnmaximise, type Size } from '$lib/wailsjs/runtime/runtime';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { headerSize } from "$lib/consts"

    var isMaximized = false
    var size : Size;

    function getSize() {
        if (browser) {            
            WindowGetSize().then((val) => {
                size = val
            })
        }
    }

    function maximise() {
        if (browser) {            
            WindowMaximise()
            isMaximized = true
        }
    }

    function minimize() {
        if (browser) {            
            WindowUnmaximise()
            isMaximized = false
        }
    }

    function onActionClick() {
        if (browser) {            
            WindowToggleMaximise()
            WindowIsMaximised().then((val) => isMaximized = val)
        }
    }


    onMount(()=> {
        if (browser) {            
            WindowIsMaximised().then((val) => {
                getSize(); 
                isMaximized = val
            })
        }
    })
    

</script>

<svelte:window on:resize={getSize}/>

<section class="titlebar-grid w-100 bg-orange-500 grid grid-cols-5 place-content-center p-0 m-0 gap-0" style="height: {headerSize};">
    <a href="/#" class="not-draggable place-self-start ">
        <img src="/images/logo.svg" class="w-8 h-8 ml-2" alt="Application logo">
    </a>

    <div class="draggable" on:dblclick={onActionClick}></div>
    
    <div class="not-draggable flex flex-row place-self-center">
        <a href="/search">
            <SearchIcon class="h-8 w-8 ml-2 text-white"></SearchIcon>
        </a>
        <a href="/home">
            <NomeIcon class="h-8 w-8 ml-2 text-white"></NomeIcon>
        </a>
        <a href="/downloads">
            <DownloadsIcon class="h-8 w-8 ml-2 text-white"></DownloadsIcon>
        </a>
    </div>

    <div class="draggable" on:dblclick={onActionClick}></div>

    <div class="not-draggable place-self-end flex flex-row mr-2">
        <a href="/user" >
            <UserIcon class="h-8 w-8 text-white" ></UserIcon>
        </a>
        <button on:click={WindowMinimise}><MinimizeIcon class="h-8 w-8 px-2 text-white hover:bg-orange-300" ></MinimizeIcon></button>

        {#if isMaximized}
            <button on:click={minimize}><UnmaximizeIcon class="h-8 w-8 px-2 text-white hover:bg-orange-300" ></UnmaximizeIcon></button>
        {/if}
        
        {#if !isMaximized}
            <button on:click={maximise}><MaximizeIcon class="h-8 w-8 px-2 text-white hover:bg-orange-300" ></MaximizeIcon></button>
        {/if}

        <button on:click={Quit}><CloseIcon class="h-8 w-8 px-2 text-white hover:bg-orange-300" ></CloseIcon></button>
    </div>
</section>

{#if size}   
    <section class="overflow-y-scroll mr-1" style="height: calc({size.h}px - {headerSize});">
        <slot />
    </section>
{/if}

<div class="fixed h-full w-full top-0 -z-20">
    <div class="h-full w-full bg-stone-900 opacity-85"></div>
    <img src="/images/background.jpg" class="fixed bottom-0 left-0 h-full w-full -z-10 opacity-50" alt="Application logo">
</div>

<style>
    .titlebar-grid {
        grid-template-columns: max-content 1fr max-content 1fr max-content;
        --wails-draggable:drag;
    }

    .not-draggable {
        --wails-draggable:nodrag;
    }
</style>
