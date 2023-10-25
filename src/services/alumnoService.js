import { Alumno } from "../model/alumnoModel.js";

async function getall(){
    return await Alumno.findAll();
}


export default{
    getall
}