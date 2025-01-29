const User = require('../models/userModel');

// Controller function to create a new user
const createUser = async(req, res) => {

    try {
        const { name, email, message } = req.body;

        const newUser = new User({
            name,
            email,
            message,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to create user' + err.message });
    }
};

const getUsers = async(req, res) => {
    try {
        const users = await User.find(); // Retrieve all users from the database
        console.log(users);
        res.status(200).json(users); // Send users as the response
    } catch (err) {
        res.status(400).json({ error: 'Failed to retrieve users' });
    }
};


const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};



// Update user by ID
const updateUser = async(req, res) => {
    try {
        // Extract name, email, and message from the request body
        const { name, email, message } = req.body;

        // Find and update the user by ID, passing the updated fields
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, { name, email, message }, { new: true }
        );

        // Check if the user was found and updated
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });

        // Return the updated user data as a response
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete user by ID
const deleteUser = async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};