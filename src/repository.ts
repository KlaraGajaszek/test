import { db } from './database';
import { NotFoundError } from './errors';
import { Profile } from './models';

const getProfileById = (id: string): Promise<Profile> => {
  const profile = db.get('profiles').find({ id }).value();
  console.log(profile);

  if (!profile) {
    throw new NotFoundError();
  }

  return Promise.resolve(profile);
};

const getProfiles = (): Promise<Profile[]> => {
  const profiles = db.get('profiles').value();

  return Promise.resolve(profiles);
};

const patchProfile = async (id: string, data: Partial<Omit<Profile, 'id'>>): Promise<Profile> => {
  const profile = db.get('profiles').find({ id }).value();

  if (!profile) {
    throw new NotFoundError();
  }

  const updatedProfile = await db
    .get('profiles')
    .find({ id })
    .assign({
      id: profile.id,
      name: data?.name || profile.name,
      image: data?.image || profile.image,
      description: data?.description || profile.description,
    })
    .write();

  return updatedProfile;
};

export const profileRepository = { getProfileById, getProfiles, patchProfile };
