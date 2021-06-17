import express from 'express';
import {
    createUser,
    getUser,
    userByID,
    deleteUserBy,
    updateuserBy
} from '../controllers/users.js';
const router = express.Router();
router.get('/', getUser);
router.post('/', createUser);
router.get('/:id', userByID);
router.delete('/:id', deleteUserBy);
router.patch('/:id', updateuserBy)
export default router;