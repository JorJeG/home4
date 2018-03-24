const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showCommits(selectedBranch = 'master') {
  return new Promise((resolve, reject) => {
    // Показывает массив с ветками
    exec(`cd ${PATH_TO_REPO} && git log --pretty=format:"%an - %s - %H" ${selectedBranch.replace(/-/, '/')}`)
      .then((commits) => {
        const arrCommits = commits.stdout.split('\n');
        resolve(arrCommits.map((commit) => {
          const splitCommit = commit.split(' - ');
          return {
            name: splitCommit[0],
            title: splitCommit[1],
            hash: splitCommit[2],
          };
        }));
      }).catch(() => {
        reject(Error('Опаньки'));
      });
  });
};
