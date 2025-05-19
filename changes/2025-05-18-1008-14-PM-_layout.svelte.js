import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!----> <div class="footer py-16 bg-gray-100"><p class="text-center">Created by <strong><a href="https://www.github.com/frostythedev" target="_blank">@frostythedev</a></strong> 💻</p></div>`;
}
export {
  _layout as default
};