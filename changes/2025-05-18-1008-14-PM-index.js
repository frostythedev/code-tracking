import { B as BROWSER, a as assets, b as base, c as app_dir, p as public_env, s as safe_public_env, o as override, r as reset, d as read_implementation, e as options, g as get_hooks, f as set_private_env, h as prerendering, i as set_public_env, j as set_safe_public_env, k as set_read_implementation } from "./chunks/internal.js";
import * as devalue from "devalue";
import { m as make_trackable, d as disable_search, a as decode_params, r as readable, w as writable, v as validate_layout_server_exports, b as validate_layout_exports, c as validate_page_server_exports, e as validate_page_exports, n as normalize_path, f as resolve, g as decode_pathname, h as validate_server_exports } from "./chunks/exports.js";
import { parse, serialize } from "cookie";
import * as set_cookie_parser from "set-cookie-parser";
const SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
const ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
const PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
... (truncated for brevity)