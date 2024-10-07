const db = require('../firebase/firebaseConexion');
const { v4: uuidv4 } = require('uuid');

async function getAllProjects() {
    const snapshot = await db.collection('projects').get();
    const projects = [];
    snapshot.forEach(doc => {
        projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
}

async function createProject(data) {
    const newProject = {
        id: uuidv4(),
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        status: data.status,
        budget: data.budget
    };

    await db.collection('projects').doc(newProject.id).set(newProject);
    return newProject;
}

module.exports = {
    getAllProjects,
    createProject
};



// import db from "../firebase/firebase_conection.js";
// import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
// const { v4: uuidv4 } = require('uuid')

// let projects = [
//     {
//         id: uuidv4(),
//         name: "Proyecto A",
//         description: "Este es el proyecto A",
//         startDate: "2024-01-01",
//         endDate: "2024-06-01",
//         status: "pendiente",
//         budget: 10000
//     },
//     {
//         id: uuidv4(),
//         name: "Proyecto B",
//         description: "Este es el proyecto B",
//         startDate: "2024-03-01",
//         endDate: "2024-09-01",
//         status: "en progreso",
//         budget: 25000
//     }
// ];

// function getAllProjects() {
//     return projects;
// }

// function createProject(data) {
//     const newProject = {
//         id: uuidv4(),
//         name: data.name,
//         description: data.description,
//         startDate: data.startDate,
//         endDate: data.endDate,
//         status: data.status,
//         budget: data.budget
//     };
//     projects.push(newProject);
//     return newProject;
// }


// Funciones para Firebase
