const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// GET všetky aktivity
router.get('/', async (req, res) => {
  const activities = await Activity.findAll();
  res.json(activities);
});

// POST nová aktivita
router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json(activity);
});

// PUT aktualizácia aktivity
router.put('/:id', async (req, res) => {
  await Activity.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Activity updated' });
});

// DELETE aktivita
router.delete('/:id', async (req, res) => {
  await Activity.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Activity deleted' });
});

module.exports = router;