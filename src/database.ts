import faker from 'faker';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Profile } from './models';

type Database = {
  profiles: Profile[];
};

const seed = () => {
  const initialData: Profile[] = [];

  for (let i = 1; i <= 100; i++) {
    initialData.push({
      id: String(i),
      name: faker.name.findName(),
      image: faker.image.avatar(),
      description: faker.lorem.paragraphs(5),
    });
  }

  return initialData;
};

const adapter = new FileSync<Database>('db.json');

export const db = lowdb(adapter);

db.defaults({ profiles: seed() }).write();
