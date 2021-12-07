import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {SLIDER_HEIGHT} from '../../constants/cssConstants';
import styles from './styles';

interface SliderProps {
  label: string;
  right?: boolean;
}

const {width} = Dimensions.get('window');

const Slider = ({label, right}: SliderProps) => {
  const transform = [
    {translateY: (SLIDER_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slider;
