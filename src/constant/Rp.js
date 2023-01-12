import React from 'react';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const Rp = value => {
  return width * (value / 1000);
};

export default Rp;
