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

routerAlumno.post("/alumno" , async(req,res)=> {
     //generalmente en el get no vamos a levantar el body
    /*
    req.body
    Contiene pares clave-valor de datos enviados en el cuerpo de la solicitud. De forma predeterminada, no está
    definido y se completa cuando usa un middleware de análisis del cuerpo, como express.json()
     */
    const data = req.body
    const nuevo = await alumnoService.add(data)
    res.json(nuevo) //// Genera una respuesta con un objeto JSON código 200 OK
    console.log(nuevo)
    //no me llegan los datos del post desde postman, puede ser un problema de config
    //reveer
})