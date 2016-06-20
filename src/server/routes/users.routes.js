'use strict';

import {Router} from "express";
const router = new Router();

import Users from '../controller/users/users.controller';
let usersController = new Users();


router.route('/list').get(usersController.getUsersList); 
router.route('/info/:user_id').get(usersController.getUsersInfo);
router.route('/create').get(usersController.createUser);

export default router;

