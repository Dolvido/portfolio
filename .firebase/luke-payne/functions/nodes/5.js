

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/general/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5cf573ac.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.10765269.js"];
export const stylesheets = [];
export const fonts = [];
