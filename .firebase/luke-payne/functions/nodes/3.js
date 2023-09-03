

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/defi/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4c33c946.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.10765269.js"];
export const stylesheets = [];
export const fonts = [];
