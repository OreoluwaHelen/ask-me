import express from 'express';
import { getUsers } from '../controllers/usersController';

const route = express.Router();
route.get('/', getUsers);

export default route;
