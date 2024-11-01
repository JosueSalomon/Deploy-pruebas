import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//rutass
import userRouter from './Routers/Usuario.router'
import adminRouter from './Routers/Admin.router'
import productoRouter from './Routers/Producto.router'
import facturaRouter from './Routers/Factura.router'

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/producto', productoRouter);
app.use('/factura', facturaRouter)

//Servidor Raiz.
app.get('/', (req: Request, res: Response) => {
    res.send('Root server is on');
});

//Mensaje de consola que dice que funciona.
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});