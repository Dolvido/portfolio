import { c as create_ssr_component, f as each, e as escape, h as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let posts = [
    {
      title: "How AI is Changing the World",
      snippet: "A look at the various ways in which AI is shaping our future.",
      link: "/general/ai-world"
    },
    {
      title: "Blockchain and its Applications",
      snippet: "Understanding blockchain technology and its diverse applications.",
      link: "/general/blockchain-applications"
    }
  ];
  return `<main class="p-6 bg-gray-100"><h1 class="text-4xl font-bold mb-4" data-svelte-h="svelte-5zz3q1">Blog Posts</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${each(posts, (post) => {
    return `<div class="card shadow-lg rounded-lg flex flex-col items-center"><figure data-svelte-h="svelte-13z6uy2"> </figure> <div class="card-body"><h2 class="card-title text-xl font-bold">${escape(post.title)}</h2> <p class="text-gray-600">${escape(post.snippet)}</p> <div class="card-actions flex items-center"><a${add_attribute("href", post.link, 0)} class="btn btn-primary">Read More</a> </div></div> </div>`;
  })}</div></main>`;
});
export {
  Page as default
};
