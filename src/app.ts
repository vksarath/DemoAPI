import express from 'express';
import userRoutes from './routes/userRoutes';
import { authenticateToken } from './middleware/authentication';

const app = express();
app.use(express.json());
app.use(authenticateToken);
app.use('/api', userRoutes);

export default app;
