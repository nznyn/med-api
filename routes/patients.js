import express from 'express';

import { getPatients, createPatient, getPatient, deletePatient, updatePatient } from '../controllers/patients.js';

const router = express.Router();

router.get('/', getPatients);

router.post('/', createPatient);

router.get('/:id', getPatient);

router.delete('/:id', deletePatient);

router.patch('/:id', updatePatient);

export default router;