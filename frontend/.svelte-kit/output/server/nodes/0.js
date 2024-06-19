

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.74b1cd8f.js","_app/immutable/chunks/index.f6f034b6.js"];
export const stylesheets = ["_app/immutable/assets/0.695c8da2.css"];
export const fonts = [];
