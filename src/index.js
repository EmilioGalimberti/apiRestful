import express from "express";

const app = express()
app.use(express.json())  // primer middleware para obtener el body de todos los requests



//Configuracion del servidor
const puertoServer = 3000;
app.listen(puertoServer, async()=>{
    console.log("Api Rest en  puerto " , puertoServer)
})