

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ec8fa58f.js","_app/immutable/chunks/index.f6f034b6.js"];
export const stylesheets = [];
export const fonts = [];
