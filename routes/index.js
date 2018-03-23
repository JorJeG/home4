const express = require('express');

const showBranches = require('../helpers/showBranches');
const showCommits = require('../helpers/showCommits');
const showFiles = require('../helpers/showFiles');
const showContent = require('../helpers/showContent');
const sortFiles = require('../helpers/sortFiles');

const router = express.Router();
let url;
let fileUrl;

// Переходит на дефолтную ветку
router.get('/', async (req, res) => {
  // const branches = await showBranches();
  // const selectedBranch = branches.filter(br => br.selected === true);
  // console.log(selectedBranch);
  const commits = await showCommits();
  res.redirect(`master/${commits[0].hash}/`);
});

// Отдаёт содержимое файла
router.get('/blob/:path?', async (req, res) => {
  const { path } = req.params;
  const content = await showContent(path);
  res.render('file', {
    content,
    url,
  });
});

// Переключения между ветками, коммитами и папками
router.get('/:branch/:commit/:path*?', async (req, res) => {
  const { branch, commit, path } = req.params;

  // Когда заходим внутрь директории сохраняем предыдущий путь
  const lastPath = req.originalUrl.match(/[a-f0-9]*\/$/)[0];
  fileUrl = req.originalUrl.replace(lastPath, '');

  // Сохраняем полный путь, чтобы вернуться обратно, когда смотрим
  // содержание файла
  url = req.originalUrl;

  try {
    const branches = await showBranches(branch);
    const commits = await showCommits(branch);
    const files = await showFiles(commit, path);
    const sortedFiles = sortFiles(files);
    res.render('index', {
      branches,
      commits,
      sortedFiles,
      branch,
      commit,
      fileUrl,
      path,
    });
  } catch (e) {
    res.render('error');
  }
});

router.get('/*', (req, res) => {
  res.render('error');
});

module.exports = router;
