const express = require('express');

const showBranches = require('../helpers/showBranches');
const showCommits = require('../helpers/showCommits');
const showFiles = require('../helpers/showFiles');

const router = express.Router();

router.get('/:branch?/:commit?', async (req, res) => {
  const { branch, commit } = req.params;
  const branches = await showBranches(branch);
  const commits = await showCommits(branch);
  const files = await showFiles(commit);
  res.render('index', {
    branches,
    commits,
    files,
    branch,
  });
});

module.exports = router;
