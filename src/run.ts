import { Express } from 'express';

const PORT = process.env.PORT ?? 4000;

export const runApp = (app: Express) => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};
