const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: (true, 'Nombre requerido'),
    },

    email: {
        type: String,
        require: (true, 'Email requerido'),
        unique: true
    },

    password: {
        type: String,
        require: (true, 'Password requerido'),
    },

    img: {
        type: String,
    },

    rol: {
        type: String,
        require: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },

    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: true
    },

});

module.exports = model('Usuario', UsuarioSchema)