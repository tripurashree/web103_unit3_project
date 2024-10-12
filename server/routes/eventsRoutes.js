import express from 'express';
import { getAllEvents, getEventsByLocationId } from '../controllers/eventsController.js';

const router = express.Router();

// Route to get all events
router.get('/events', getAllEvents);

// Route to get events by location ID
router.get('/events/:locationId', getEventsByLocationId);

export default router;
