import "clsx";
import { c as pop, p as push } from "../../chunks/index.js";
import "exifr";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="grid h-screen w-full gap-8 px-8 py-8 sm:grid-cols-1 md:grid-cols-2 md:px-24 md:py-12"><div class="left-side flex max-h-screen flex-col overflow-y-auto rounded-xl bg-gray-200"><h1 class="py-4 text-center text-xl font-bold">Preset Maker</h1> <p class="text-center text-xs px-4">Welcome to your very own preset maker! To get the Lightroom settings for a photo, simply drag or open an image in the below box. Once the preview shows you can then use the download button! Happy learning!</p> <form action="" name="" class="palce-self-center px-8 py-8" id="upload-box"><input type="file" name="uploaded-photo" id="uploaded-photo" class="w-full rounded-lg border-2 border-dashed bg-gray-100 py-8 text-center"></form></div> <div class="right-side flex max-h-screen flex-col place-items-center overflow-y-auto rounded-xl bg-gray-200"><div class="py-4">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-center text-red-300">Upload an image to extract preset data</p>`;
  }
  $$payload.out += `<!--]--> <a id="download-preset" class="text-center font-bold text-green-900 px-8 py-2">Download</a></div> <img alt="Preview of Upload" id="img_preview" class="h-full w-full max-w-48 place-self-center py-2 text-center"></div></div>`;
  pop();
}
export {
  _page as default
};