import { Express } from 'express';
import { profileRepository } from './repository';

export const initializeControllers = (app: Express) => {
  app.get('/profiles', async (req, res) => {
    const profiles = await profileRepository.getProfiles();
    res.status(200).send(profiles);
  });

  app.get('/profiles/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const profile = await profileRepository.getProfileById(id);
      res.status(200).send(profile);
    } catch (ex) {
      res.status(ex.status).send(ex.message);
    }
  });

  app.patch('/profiles/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const profile = await profileRepository.patchProfile(id, req.body);
      res.status(200).send(profile);
    } catch (ex) {
      res.status(ex.status).send(ex.message);
    }
  });
};
