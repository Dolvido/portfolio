

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ethics/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.ea5455d3.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.10765269.js"];
export const stylesheets = [];
export const fonts = [];
