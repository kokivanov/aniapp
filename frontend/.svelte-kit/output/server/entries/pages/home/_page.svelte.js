import { c as create_ssr_component, d as escape, h as add_attribute, i as is_promise, n as noop, j as each, v as validate_component } from "../../../chunks/index.js";
function GetNewestList(arg1, arg2) {
  return window["go"]["main"]["App"]["GetNewestList"](arg1, arg2);
}
const animeTile_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image-container.svelte-10w6o2u.svelte-10w6o2u{overflow:hidden;display:inline-block;position:relative}.image-container.svelte-10w6o2u img.svelte-10w6o2u{-o-object-fit:cover;object-fit:cover}",
  map: null
};
const AnimeTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { anime } = $$props;
  if ($$props.anime === void 0 && $$bindings.anime && anime !== void 0)
    $$bindings.anime(anime);
  $$result.css.add(css);
  return `<div class="flex flex-col font-sans font-bold text-stone-700 mx-1 my-2 relative cursor-pointer selection:bg-none selection:text-orange-500"><div><div class="relative rounded-xl image-container w-48 h-64 svelte-10w6o2u"><div class="absolute flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity w-full h-full"><p class="h-12 w-5/6 text-ellipsis line-clamp-4 text-center">${escape(anime.title.userPreferred)}</p>
                <br>
                ${anime.season && anime.season ? `<p>${escape(anime.seasonYear)} ${escape(anime.season)}</p>` : `<p>${escape(anime.startDate.year)}</p>`}</div>
            <img class=" svelte-10w6o2u"${add_attribute("src", anime.coverImage.large, 0)}${add_attribute("alt", anime.title.userPreferred, 0)}></div></div>
    

</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animeList = GetNewestList(1, 40);
  return `<section class="grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 w-5/6 my-4 mx-auto place-content-center align-middle">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        <div class="loader-container flex items-center justify-center h-screen"><div class="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div></div>
    `;
    }
    return function(anilist) {
      return ` 
        ${anilist.length ? `${each(anilist, (anime) => {
        return `${validate_component(AnimeTile, "AnimeTile").$$render($$result, { anime }, {}, {})}`;
      })}` : ``}
    `;
    }(__value);
  }(animeList)}</section>`;
});
export {
  Page as default
};
