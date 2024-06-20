import { writable } from "svelte/store";

export const searchRequestStore = writable('')
export const isSearchActiveStore = writable(false)
export const wasSearchClickedStore = writable(false)
