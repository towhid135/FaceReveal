import React from 'react';
import {View, StyleSheet} from 'react-native';
import Color from '../constant/Color';

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: `${Color.dark.base}`,
  },
});

export default Card;
