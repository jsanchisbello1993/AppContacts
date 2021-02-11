const { Schema, model } = require('mongoose');

const contactoSchema = new Schema(
    {
        nombre: String,
        apellidos: String,
        telefono: { type: Number, required: true},
        direccion: String,
        
    }, {
        timestamps: true
    });

module.exports = model('Contacto', contactoSchema);