

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1fedfc27.js","_app/immutable/chunks/index.f6f034b6.js"];
export const stylesheets = [];
export const fonts = [];
