import { Alumno } from "../model/alumnoModel.js";

async function getAll(){
    return await Alumno.findAll();
}

async function getByID(id){
    return await Alumno.findOne({where: {id:id}})
}

async function add(nuevo){
    return await Alumno.create(nuevo)
}

export default{
    getAll,
    getByID,
    add,
}