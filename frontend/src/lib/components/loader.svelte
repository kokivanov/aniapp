<script lang="ts">
    import { headerSize } from "$lib/consts";
    import type { Size } from "$lib/wailsjs/runtime/runtime";


    export let windowSize: Size
</script>

<div class="loader-container flex fixed items-center justify-center w-full left-0 top-0" style="height: calc({windowSize.h}px - {headerSize});">
    <!-- TODO: Add raphtalia at the adge of the screen -->
    <div class="loader border-t-4 border-orange-500 rounded-full w-16 h-16 animate-spin"></div>
</div>