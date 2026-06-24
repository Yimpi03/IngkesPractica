
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VHDW63FK.js"
    ],
    "route": "/flashcards"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-LEI3GQ2P.js",
      "chunk-4B376OU7.js"
    ],
    "route": "/memory"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-P7GILERJ.js",
      "chunk-4B376OU7.js"
    ],
    "route": "/dragdrop"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VZNFHVNX.js",
      "chunk-5QXK2KGW.js",
      "chunk-4B376OU7.js"
    ],
    "route": "/quiz"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5ILSHY36.js",
      "chunk-5QXK2KGW.js",
      "chunk-4B376OU7.js"
    ],
    "route": "/exam"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: 'b9e28717a4448ae6113527791e4a01acf31ffa3ff198fd8d8eeb09b393d850a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'd10275dc57b9bf3948a695ccf4f2eb6549e7f6b8d6790e09aaf932962f7c920b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
