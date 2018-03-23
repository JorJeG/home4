const express = require('express');

const { DEFAULT_BRANCH } = require('../config/constants');
const showBranches = require('../helpers/showBranches');
const showCommits = require('../helpers/showCommits');
const showFiles = require('../helpers/showFiles');

const router = express.Router();

// Показывает дефолтную ветку
// router.get('/', (req, res) => {
//   res.redirect(`/${DEFAULT_BRANCH}`);
// });

router.get('/:branch?', async (req, res) => {
  const branches = await showBranches(req.params.branch);
  const commits = await showCommits(req.params.branch);
  const files = await showFiles(commits.hash);
  res.render('index', { branches, commits, files });
});

module.exports = router;
