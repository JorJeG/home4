const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showBranch(selectedBranch) {
  return new Promise((resolve, reject) => {
    // Показывает массив с ветками
    exec(`cd ${PATH_TO_REPO} && git branch -v --format="%(HEAD) %(refname:short) %(objectname)"`).then((branches) => {
      const arrBranches = branches.stdout.trim().split('\n');
      resolve(arrBranches.map((branch) => {
        const parseBranch = branch.replace('*', '').trim().split(' ');
        const output = {
          selected: false,
          name: parseBranch[0].replace('/', '^'),
          commit: parseBranch[1],
        };
        if (parseBranch[0] === selectedBranch) {
          output.selected = true;
        }
        return output;
      }));
    }).catch(() => {
      reject(Error('Опаньки'));
    });
  });
};
