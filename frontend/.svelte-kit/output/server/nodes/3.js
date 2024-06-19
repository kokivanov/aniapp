

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/downloads/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.2b020f45.js","_app/immutable/chunks/index.f6f034b6.js"];
export const stylesheets = [];
export const fonts = [];
