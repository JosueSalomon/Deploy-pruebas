import { Router } from 'express';
import upload from '../Utils/upload'; 
import { uploadImage } from '../Controllers/Admin.controller'; 

const router = Router();


router.post('/upload', upload.single('file'), uploadImage); // Asegúrate de que 'file' es el campo correcto

export default router;
