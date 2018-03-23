const exec = require('./exec');
const { PATH_TO_REPO } = require('../config/constants');

module.exports = function showContent(hash) {
  return new Promise((resolve, reject) => {
    // Показывает массив с ветками
    exec(`cd ${PATH_TO_REPO} && git show ${hash}`).then((content) => {
      resolve(content.stdout);
    }).catch(() => {
      reject(Error('Опаньки'));
    });
  });
};
