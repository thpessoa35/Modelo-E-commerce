import express from "express";

import sequelizeConfig from "./Database/pg";
import { router } from "./router";


const sequelizeInstance = sequelizeConfig

sequelizeInstance.sync({ force: false }).then(()=>console.log('rodando'))

const app = express();

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('ola');
});

app.listen(3333, async () => {console.log('Conexão bem-sucedida com o banco de dados')});
