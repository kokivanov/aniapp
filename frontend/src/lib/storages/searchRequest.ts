import { Size } from "$lib/wailsjs/runtime/runtime";
import { writable } from "svelte/store";

export const searchRequestStore = writable('')
export const isSearchActiveStore = writable(false)
export const widnowSizeStorage = writable<Size>()
