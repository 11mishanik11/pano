import express from "express";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import cors from "cors";
import router from "./src/routes/index.js";
import {sequelize} from "./src/db/index.js";
import errorHandler from "./src/middleware/errorHandling.js";
import {config} from "dotenv"
config()

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.resolve(__dirname, 'public')))
app.use('/api', router);

// Обработка ошибок
app.use(errorHandler);

(async () => {
    try {
        app.listen(PORT, async () => {
            console.log('Сервер успешно запущен на порту ' + PORT)
        })

        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Подключение к БД успешно');
    } catch (error) {
        console.error('Ошибка при подключении к БД', error);
    }
})()


