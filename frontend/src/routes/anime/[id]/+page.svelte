
<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    // Access the id parameter from the route
    let id;
    
    $: id = $page.params.id;

    // Fetch or perform actions based on the id
    onMount(() => {
        console.log("Anime ID:", id);
        // You can fetch data or perform other actions here based on the id
    });
</script>
ANIME PAGE 