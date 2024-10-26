const express = require('express');
const User = require('./users.model');
const jwt = require('jsonwebtoken');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await User.findOne({ username });
        if(!admin){
            res.status(404).send({message: "Admin not found"});
        }
        if(admin.password !== password){
            res.status(401).send({message: "Invalid password!"});
        }
        
        const token = jwt.sign({id: admin._id, username: admin.username, role: admin.role},
            JWT_SECRET,
            {expiresIn: "1h"}
        )
        return res.status(200).send(
            {
                message: "Authenticated",
                token: token,
                user: {
                    username: admin.username,
                    role: admin.role
                }
            }
        );
    } catch (err) {
        console.error("Failed to login as admin", err.message);
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router