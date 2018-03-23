const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showFiles(selectedCommits = 'HEAD') {
  return new Promise((resolve, reject) => {
    exec(`cd ${PATH_TO_REPO} && git ls-tree --full-name ${selectedCommits}`)
      .then((tree) => {
        const arrFiles = tree.stdout.split('\n').filter(file => file !== '');
        resolve(arrFiles.map((file) => {
          const type = file.split(' ')[1];
          const name = file.split('\t')[1];
          return {
            type,
            name,
          };
        }));
      }).catch(() => {
        reject(Error('Опаньки'));
      });
  });
};
