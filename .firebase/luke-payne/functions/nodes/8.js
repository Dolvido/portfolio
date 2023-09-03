

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/self/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.f01d5b44.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.10765269.js"];
export const stylesheets = [];
export const fonts = [];
