import React from 'react';
import {View, Text, Button} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

const ButtonComponent = ({variant, label, onPress}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12, 13, 52, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';
  return (
    // <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
    //   <Text style={[styles.label, {color}]}>{label}</Text>
    // </RectButton>
    <Button title={label} {...{onPress}} />
  );
};

export default ButtonComponent;
