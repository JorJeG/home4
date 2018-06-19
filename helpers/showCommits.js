const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showCommits(selectedBranch) {
  return new Promise((resolve, reject) => {
    // Показывает массив с ветками
    exec(`cd ${PATH_TO_REPO} && git log --pretty=format:"%an - %s - %H - %at" ${selectedBranch.replace('^', '/')}`)
      .then((commits) => {
        const arrCommits = commits.stdout.split('\n');
        resolve(arrCommits.map((commit) => {
          const splitCommit = commit.split(' - ');
          const formatDate = (new Date(splitCommit[3] * 1000)).toDateString();
          return {
            name: splitCommit[0],
            title: splitCommit[1],
            hash: splitCommit[2],
            date: formatDate,
          };
        }));
      }).catch(() => {
        reject(Error('Опаньки'));
      });
  });
};
