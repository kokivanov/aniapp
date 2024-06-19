

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.541e37aa.js","_app/immutable/chunks/index.f6f034b6.js"];
export const stylesheets = ["_app/immutable/assets/4.8999adbd.css"];
export const fonts = [];
