import express from 'express';
import {getbook} from '../Controller/Book.controller.js';

const router= express.Router();

router.get('/',getbook);



 export default router;