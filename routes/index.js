const express = require('express');

const showBranches = require('../helpers/showBranches');
const showCommits = require('../helpers/showCommits');
const showFiles = require('../helpers/showFiles');
const showContent = require('../helpers/showContent');

const router = express.Router();

// Переходит на дефолтную ветку
router.get('/', async (req, res) => {
  const commits = await showCommits();
  res.redirect(`master/${commits[0].hash}`);
});

// Отдаёт содержимое файла
router.get('/blob/:path?', async (req, res) => {
  const { path } = req.params;
  const content = await showContent(path);
  res.render('file', {
    content,
  });
});

// Переключения между ветками, коммитами и папками
router.get('/:branch?/:commit?/:path*?', async (req, res) => {
  const { branch, commit, path } = req.params;
  const branches = await showBranches(branch);
  const commits = await showCommits(branch);
  const files = await showFiles(commit, path);
  res.render('index', {
    branches,
    commits,
    files,
    branch,
    commit,
  });
});

module.exports = router;
