const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showFiles(selectedCommits, path) {
  return new Promise((resolve, reject) => {
    const pathDir = path.slice(0, -2) || selectedCommits;
    exec(`cd ${PATH_TO_REPO} && git ls-tree --full-name ${pathDir}`)
      .then((tree) => {
        const arrFiles = tree.stdout.split('\n').filter(file => file !== '');
        resolve(arrFiles.map((file) => {
          const type = file.split(' ')[1];
          const hash = file.split(' ')[2].split('\t')[0];
          const name = file.split('\t')[1];
          return {
            type,
            hash,
            name,
          };
        }));
      }).catch(() => {
        reject(Error('Опаньки'));
      });
  });
};
