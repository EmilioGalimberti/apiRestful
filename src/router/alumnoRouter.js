import { Router } from "express";
import { Alumno } from "../model/alumnoModel.js";

import alumnoService from "../services/alumnoService.js";

export const routerAlumno = Router ();

routerAlumno.get("/alumnos", async(req,res)=>{
    try{
        const alumnosFound = await alumnoService.getAll()
        if (alumnosFound){
            res.json(alumnosFound)
        } else{
            res.status(404).send({mensaje: "Alumno no encontrado"})
        }
        console.log(alumnosFound)
    }
    catch(error){
        res.status(500).send({mensaje: "Error interno"})
    }
})

routerAlumno.get("/alumno/:id", async(req,res)=>{
    try{
        const id = req.params.id
        const alumnoFound = await alumnoService.getByID(id)
        if (alumnoFound) {
            res.json(alumnoFound)
        } else {
            res.status(404).send({ mensaje: 'Producto inexistente! (404) no se encontro' })
        }
        console.log(alumnoFound)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error interno!' })
    }
})