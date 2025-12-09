import express from 'express';
import bodyParser from 'body-parser';
import helloRoutes from './routes/hello';
import healthRoutes from './routes/health';
import authRoutes from './routes/auth';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', helloRoutes);
app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

