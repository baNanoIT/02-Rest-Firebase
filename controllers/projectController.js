//const projectModel = require('../models/projectModel');
// function getAllProjects(req, res) {
//     const projects = projectModel.getAllProjects();
//     projects.length > 0 ?
//         res.status(200).json(projects) :
//         res.status(404).json({ code: 404, message: "No se han encontrado datos" });
// }

// function createProject(req, res) {
//     //Validación de la estructura
//     try {
//         const newProject = projectModel.createProject(req.body);
//         res.status(201).json(newProject);
//     } catch (error) {
//         res.status(400).json({ code: 400, message: "Error por parte del cliente" })
//     }
// }


const projectModel = require('../models/projectModel');

async function getAllProjects(req, res) {
    try {
        const projects = await projectModel.getAllProjects();
        projects.length > 0 ?
            res.status(200).json(projects) :
            res.status(404).json({ code: 404, message: "No se han encontrado datos" });
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error del servidor", error: error.message });
    }
}

async function createProject(req, res) {
    try {
        const newProject = await projectModel.createProject(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ code: 400, message: "Error por parte del cliente", error: error.message });
    }
}

module.exports = { getAllProjects, createProject };
