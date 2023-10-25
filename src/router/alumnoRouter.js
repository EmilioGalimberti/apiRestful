import { Router } from "express";
import { Alumno } from "../model/alumnoModel.js";

import alumnoService from "../services/alumnoService.js";

export const routerAlumno = Router ();


routerAlumno.get("/alumnos", async(req,res)=>{
    try{
        const alumnosFound = await alumnoService.getall()
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