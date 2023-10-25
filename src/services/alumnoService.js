import { Alumno } from "../model/alumnoModel.js";

async function getAll(){
    return await Alumno.findAll();
}


export default{
    getAll
}