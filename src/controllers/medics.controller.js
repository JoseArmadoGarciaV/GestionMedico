import { Medic } from "../models/Medic.js";


//ver
export const getMedics= async(req, res) => {
try {
    const medics = await Medic.findAll();
    res.json(medics);
} catch (error) {
    return res.status(500).json({ message: error.message });
}
};

//agregar
export const createMedic = async(req, res) => {
const { 
       name,
       speciality,
       phone,
       email, 
       image, 
       services,
       certifications,
       state
    } = req.body;
try {
    const newMedic = await Medic.create({
        name,
        speciality,
        phone,
        email, 
        image, 
        services,
        certifications,
        state
    });
    res.json(newMedic);
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}

//actualizar
export const updateMedic = async(req, res) => {
try {
    const { id } = req.params;
    const { name, speciality, phone, email, image, services, certifications, state } = req.body;
    const medic=await Medic.findByPk(id);
    medic.name = name;
    medic.speciality = speciality;
    medic.phone = phone;
    medic.email = email;
    medic.image = image;
    medic.services = services;
    medic.certifications = certifications;
    medic.state = state;
    await medic.save();
    res.json(medic);
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}

//borrar
export const deleteMedic = async(req, res) => {
try {
    const { id } = req.params;
    const medic = await Medic.destroy({
        where: { id }
    });
    res.json(medic);
} catch (error) {
    return res.status(500).json({ message: error.message });
}

}

export const getMedic = async(req, res) => {
try {
    const { id } = req.params;
    const medic = await Medic.findOne({
        where: { id, }
    });

    if(!medic) {
        return res.status(404).json({ message: 'Medic not found' });
    }

    res.json(medic);
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}

