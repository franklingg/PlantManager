import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default function Splash(){
    return (
        <SafeAreaView style={styles.background}>
            <Text>
                Hi there
            </Text>
        </SafeAreaView>);
};