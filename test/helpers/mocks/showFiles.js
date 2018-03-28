const files = [
  {
    "hash": "34a99ea3ea1785e4233a4c3e6d28483251318035",
    "name": ".editorconfig",
    "type": "blob",
  },
  {
    "hash": "79bb36d352611629f247e77e7a47f2e4504c7afa",
    "name": ".gitignore",
    "type": "blob",
  },
  {
    "hash": "f4795424d4eab7da783e64bb726bac2a0fd19197",
    "name": "package.json",
    "type": "blob",
  }
];

module.exports = function showFiles(path) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
    path === 'd8c07e1b8b1893c4cbbea8616f8d0615b7dafa61'
      ? resolve(files)
      : reject('Опаньки'));
  });
};
