export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CTo7JdiX.js",app:"_app/immutable/entry/app.C7kqPRUC.js",imports:["_app/immutable/entry/start.CTo7JdiX.js","_app/immutable/chunks/CsRawGiI.js","_app/immutable/chunks/DzLYgk6j.js","_app/immutable/chunks/Dg4miA7n.js","_app/immutable/entry/app.C7kqPRUC.js","_app/immutable/chunks/DzLYgk6j.js","_app/immutable/chunks/D1zzJfmc.js","_app/immutable/chunks/DWNg2AQt.js","_app/immutable/chunks/CZG-oCpA.js","_app/immutable/chunks/BWS0F7rs.js","_app/immutable/chunks/Dg4miA7n.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();