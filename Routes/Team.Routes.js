import { createTeam, getAllTeams } from "../Controllers/Team.Controller.js";
import express from 'express';
const router = express.Router();

router.post('/', createTeam);
router.get('/', getAllTeams)

export default router;
