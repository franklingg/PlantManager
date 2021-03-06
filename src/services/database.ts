import firestore from '@react-native-firebase/firestore';

const environments = firestore().collection('plants_environments');

const plants = firestore().collection('plants');

export interface Environment {
  key: string;
  title: string;
};

export const ALL_ENVIRONMENT: Environment = {
  key: 'all',
  title: 'Todos',
};

export interface Plant {
  about: string;
  environments: string[];
  frequency: {
    repeat_every: 'week' | 'day';
    times: number;
  };
  id: number;
  name: string;
  photo: string;
  water_tips: string;
};

export interface PlantSaved extends Plant {
  remindTime: string;
  remindDay: string;
};

export async function getEnvironments() {
  const data = await environments.get().then(query => {
    return query.docs.map(doc => doc.data() as Environment);
  });
  return [ALL_ENVIRONMENT, ...data];
};

export async function getPlants() {
  const data = await plants.get().then(query => {
    return query.docs.map(doc => doc.data() as Plant);
  });
  return data;
};
