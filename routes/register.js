const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Import Sequelize instance
const { sequelize } = require('../models'); // adjust path if needed
const initModels = require('../models/init-models'); // this is your generated file
const models = initModels(sequelize);

const { pet_sitters: PetSitter, pet_owners: PetOwner } = models;

// GET register page
router.get('/', (req, res) => {
  res.render('register');
});

// POST register form
router.post('/', async (req, res) => {
  const { name, email, password, role, phone, address } = req.body;

  try {
    if (role === 'sitter') {
      const existing = await PetSitter.findOne({ where: { email } });
      if (existing) return res.json({ success: false, message: 'Email already registered.' });

      const hash = await bcrypt.hash(password, 10);

      await PetSitter.create({
        name,
        email,
        password_hash: hash
      });

      res.json({ success: true });
    } else if (role === 'owner') {
      const existing = await PetOwner.findOne({ where: { email } });
      if (existing) return res.json({ success: false, message: 'Email already registered.' });

      const hash = await bcrypt.hash(password, 10);

      await PetOwner.create({
        name,
        email,
        password_hash: hash,
        phone: phone || null,
        address: address || null
      });

      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid role.' });
    }
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: 'Database error.' });
  }
});

module.exports = router;
