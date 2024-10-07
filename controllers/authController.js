const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'claveSecreta';
const JWT_EXPIRES_IN = '180s';

async function login(req, res) {
    const { username, password } = req.body;
    const user = userModel.getUserByUserName(username);

    if (!user) // Validar el usuario
        return res.status(401).json({ code: 401, message: "Credenciales no validas" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) // Validar la contraseña del usuario dado
        return res.status(401).json({ code: 401, message: "Credenciales no validas" });

    const token = jwt.sign(
        { username: user.username, },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );

    return res.status(200).json({ "code": 200, "message": "Inicio de sesión exitoso", "token": token });
}

function createUser(req, res) {
    try {
        const newUser = userModel.createUser(req.body);
        login(req,res);        
    } catch (error) {
        res.status(400).json({ code: 400, message: "Error por parte del cliente" })
    }
}

module.exports = { login, createUser, JWT_SECRET };