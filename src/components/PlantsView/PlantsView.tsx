import React, { useEffect, useState } from 'react';
import { View, ViewProps, Text, FlatList } from 'react-native';
import { ALL_ENVIRONMENT, Environment, Plant } from '~/services/database';

import { commonStyle } from '~/styles';
import StateButton from '~/components/StateButton';
import styles from './styles';
import PlantCard from '../PlantCard';

interface PlantsViewProps extends ViewProps {
  environments: Environment[];
  plants: Plant[];
  plantClick: (p: Plant) => void;
}

export default function PlantsView(props: PlantsViewProps) {
  const [activeEnvironments, setActiveEnvironemnts] = useState<Environment[]>([
    ALL_ENVIRONMENT,
  ]);
  const [selectedPlants, setSelectedPlants] = useState<Plant[]>([]);

  useEffect(() => {
    const envs = activeEnvironments.includes(ALL_ENVIRONMENT)
      ? [...props.environments]
      : [...activeEnvironments];
    const selected = props.plants.filter(plant => {
      return envs.some(env => {
        return plant.environments.includes(env.key);
      });
    });
    setSelectedPlants(selected);
  }, [props.environments, props.plants, activeEnvironments]);

  return (
    <>
      <View style={styles.environments}>
        <Text style={[commonStyle.text, { textAlign: 'left' }]}>
          <Text style={commonStyle.bold}>Em qual ambiente</Text> {'\n'}
          você quer colocar sua planta?
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={props.environments}
          renderItem={({ item }) => (
            <StateButton
              active={activeEnvironments.includes(item)}
              setter={setActiveEnvironemnts}
              item={item}
              allItem={ALL_ENVIRONMENT}
              allItems={props.environments}
              text={item.title}
            />
          )}
          keyExtractor={item => item.key}
          style={styles.envList}
          horizontal
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={selectedPlants}
          renderItem={({ item }) => (
            <PlantCard
              plant={item}
              onPress={() => {
                props.plantClick(item);
              }}
            />
          )}
          numColumns={2}
          ListFooterComponent={<View style={{ paddingBottom: 490 }} />}
        />
      </View>
    </>
  );
}
