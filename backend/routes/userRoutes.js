// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// POST route to create a new user
router.post('/users', createUser);
router.get('/users', getUsers);

// Route to get a user by ID
router.get('/users/:id', getUserById);

router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;