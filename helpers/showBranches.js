const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showBranch(selectedBranch = 'master') {
  return new Promise((resolve, reject) => {
    // Показывает массив с ветками
    exec(`cd ${PATH_TO_REPO} && git branch`).then((branches) => {
      const arrBranches = branches.stdout.trim().split('\n');
      resolve(arrBranches.map((branch) => {
        if (branch.replace('*', '').trim() === selectedBranch) {
          return {
            selected: true,
            name: branch.replace('*', '').trim().replace('/', '-'),
          };
        }
        return {
          selected: false,
          name: branch.replace('*', '').trim().replace('/', '-'),
        };
      }));
    }).catch(() => {
      reject(Error('Опаньки'));
    });
  });
};
