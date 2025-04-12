const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');
const authenticateToken = require('../middleware/auth');

// GET všetky aktivity
router.get('/', async (req, res) => {
  const activities = await Activity.findAll();
  res.json(activities);
});

// POST nová aktivita
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { type, distance, duration } = req.body;
    
    const activity = await Activity.create({
      type,
      distance,
      duration,
      user_id: req.user.id // ID z JWT tokenu
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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

// GET /api/activities/my - Vráti aktivity prihláseného používateľa
router.get('/my', authenticateToken, async (req, res) => {
  try {
    const activities = await Activity.findAll({
      where: { user_id: req.user.id } // Filtruje podľa ID z tokenu
    });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;