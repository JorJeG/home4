const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showBranch(selectedBranch) {
  return new Promise((resolve, reject) => {
    // Показывает массив с ветками
    exec(`cd ${PATH_TO_REPO} && git branch -v --format="%(HEAD) %(refname:short) %(objectname)"`).then((branches) => {
      const arrBranches = branches.stdout.trim().split('\n');

      // Проверяет есть ли такая ветка в репозитории
      const isThere = arrBranches.some((branch) => {
        const parseBranch = branch.replace('*', '').trim().split(' ');
        return parseBranch[0].replace('/', '^') === selectedBranch;
      });
      if (!isThere) throw Error('Опаньки');

      // Делаем отформатированный вывод
      const outputArray = arrBranches.map((branch) => {
        const parseBranch = branch.replace('*', '').trim().split(' ');
        const output = {
          selected: false,
          name: parseBranch[0].replace('/', '^'),
          commit: parseBranch[1],
        };
        if (parseBranch[0].replace('/', '^') === selectedBranch) {
          output.selected = true;
        }
        return output;
      });
      resolve(outputArray);
    }).catch(() => {
      reject(Error('Опаньки'));
    });
  });
};
