module.exports = function sortFiles(arrFiles) {
  const directory = [];
  const files = [];
  const type = 'tree';

  arrFiles.forEach((el) => {
    if (el.type === type) {
      directory.push(el);
    } else {
      files.push(el);
    }
  });
  return directory.concat(files);
};
