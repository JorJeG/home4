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
  // Сделал здесь установку дефолтного параметра, а не внутри функции,
  // потому что у тестов падает параметр % Branch, который сложно протестировать
  // из-за того что мастер ветка будет постоянно меняться
  const defaultBranch = 'master';

  const commits = await showCommits(defaultBranch);
  res.redirect(`master/${commits[0].hash}/`);
});

// Отдаёт содержимое файла
router.get('/blob/:path?', async (req, res) => {
  const { path } = req.params;
  try {
    const content = await showContent(path);
    res.render('file', {
      content,
      url,
    });
  } catch (e) {
    res.render('error');
  }
});

// Переключения между ветками, коммитами и папками
router.get('/:branch/:commit/*', async (req, res) => {
  // Сохраняем полный путь, чтобы вернуться обратно, когда смотрим
  // содержание файла
  url = req.originalUrl;

  try {
    const { branch, commit } = req.params;

    // Когда заходим внутрь директории сохраняем предыдущий путь
    let lastPath = req.originalUrl.match(/[a-f0-9]*\/$/)[0];
    fileUrl = req.originalUrl.replace(lastPath, '');
    const branches = await showBranches(branch);
    const commits = await showCommits(branch);
    let files;
    if (lastPath === `${commit}/`) {
      lastPath = '';
      files = await showFiles(commit);
    } else {
      files = await showFiles(lastPath);
    }
    const sortedFiles = sortFiles(files);
    res.render('index', {
      branches,
      commits,
      sortedFiles,
      branch,
      commit,
      fileUrl,
      lastPath,
      curUrl: req.originalUrl,
    });
  } catch (e) {
    res.render('error');
  }
});

router.get('/*', (req, res) => {
  res.render('error');
});

module.exports = router;
