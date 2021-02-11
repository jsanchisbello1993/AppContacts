const Contacto = require('../models/Contacto');
//const { delete } = require('../routes/contactos');
const contactosController = {};

contactosController.obtenerContactos = async(req, res)=>{
    const contactos = await Contacto.find();
    res.json(contactos);
};

contactosController.crearContacto = async(req, res) =>{
    const nuevoContacto = new Contacto(req.body);
    await nuevoContacto.save();
    res.json({ message: 'Contacto guardado' });
};

contactosController.obtenerContacto = async(req, res) => {
    const contacto = await Contacto.findById(req.params.id);
    res.json(contacto);
};

contactosController.eliminarContacto = async (req, res) => {
    await Contacto.findByIdAndDelete(req.params.id)
    res.json('Contacto eliminado');
};

contactosController.editarContacto = async(req, res) =>{
    const { nombre, apellidos, telefono, direccion}= req.body;
    await Contacto.findByIdAndUpdate(req.params.id,{
        nombre,
        apellidos,
        telefono,
        direccion
    });
    res.json('Contacto editado');
};

module.exports = contactosController;



