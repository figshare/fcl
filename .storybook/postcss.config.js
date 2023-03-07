module.exports = (paths, { isDebug }) =>
  () => [
    require("postcss-import")({ path: paths }),
    require("postcss-preset-env")({
      stage: 0,
      browserslist: [
        "Explorer 11",
        "Firefox 28",
        "Chrome 38",
        "Opera 25",
        "Safari 7",
        "Edge 12",
      ],
      features: { "custom-properties": { preserve: false } },
      insertAfter: {
        "pleeease-filters": {},
        "pixrem": {},
        "postcss-flexbugs-fixes": {},
      },
    }),
    ...(!isDebug ? [require("cssnano")({
      preset: [
        "default",
        { discardComments: { removeAll: true }, normalizeUrl: false },
      ],
    })] : []),
  ];
