import { Router, Request, Response } from 'express';

const router = Router();

// Hello World endpoint
router.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

export default router;

