

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.6298eefe.js","_app/immutable/chunks/index.f6f034b6.js"];
export const stylesheets = [];
export const fonts = [];
