module.exports = function(api) {
  const presets = ['react-app'];
  const plugins = [
    "@rocketstation/babel-plugin-component-index"
  ];
  if (api.env('development')) {
    plugins.push('react-hot-loader/babel');
  }
  return { presets, plugins };
};
