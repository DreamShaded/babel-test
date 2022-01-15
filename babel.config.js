module.exports = function (api) {
  api.cache(false);
  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: {
          version: '3',
          proposals: true
        },
        useBuiltIns: 'usage'
      }
    ]
  ];

  const plugins = [
    ['wildcard'],
    ['@babel/plugin-transform-spread'],
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/transform-runtime']
  ];

  return {
    presets,
    plugins
  };
};
