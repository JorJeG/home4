const content = 'node_modules/\n';

module.exports = function showContent(hash) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
    hash === 'c2658d7d1b31848c3b71960543cb0368e56cd4c7'
      ? resolve(content)
      : reject('Опаньки'));
  });
};
