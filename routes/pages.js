const router = require('express').Router();
const auth = require('../middleware/auth');
const { Page, validatePage } = require('../models/page');

// @route   GET /api/pages/:pageName
// @desc    Fetch page data
// @access  Public
router.get('/:pageName', async (req, res) => {
  try {
    const page = await Page.findOne({ pageName: req.params.pageName });
    if (!page) {
      return res.status(404).send({
        errors: ['Page not found']
      });
    }
    res.send(page);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// @route   POST /api/pages
// @desc    Create a page with editable data
// @access  Private
router.post('/', auth, async (req, res) => {
  const result = validatePage.validate(req.body, { abortEarly: false });
  if (result.error) {
    return res.status(422).send({
      errors: result.error.details.map(({ message }) => message)
    });
  }
  const { pageName } = req.body;
  try {
    let page = await Page.findOne({ pageName });
    if (page) {
      return res.status(409).send({
        errors: [`Page '${pageName}' already exists. Would you like to edit this page instead?`]
      });
    }
    page = new Page(req.body);
    await page.save();
    res.send('Success!');
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
