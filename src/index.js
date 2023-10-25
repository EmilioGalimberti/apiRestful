import express from "express";
import { routerAlumno } from "./router/alumnoRouter.js";
import { sequelize } from "./data/confing.js";

const app = express()
app.use(express.json())  // primer middleware para obtener el body de todos los requests
app.use("/",routerAlumno)


//Configuracion del servidor
const puertoServer = 3000;
app.listen(puertoServer, async()=>{
    console.log("Api Rest en  puerto " , puertoServer)
    //await sequelize.sync()
    //console.log("Db sincronizada")
})