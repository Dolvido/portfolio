

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/general/blockchain-applications/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.81639106.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.10765269.js"];
export const stylesheets = [];
export const fonts = [];
