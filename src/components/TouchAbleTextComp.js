import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Color from '../constant/Color';
// import {assetsObj} from '../screens/AuthScreen';
import CustomFont from '../constant/CustomFont';
import FontSize from '../constant/FontSize';
import Rp from '../constant/Rp';
import CustomIcon from './CustomIcon';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import Material from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Color from '../constants/Color';

const {height, width} = Dimensions.get('window');

const TouchAbleTextComp = props => {
  /* 
    required props
    imagePath
    buttonTitle
    useIcon - bool type
    iconType
    iconName
    iconSize
    isImageRequired
    useIcon - bool type
    imageContainerStyle
    touchStyle
    imageStyle
    textStyle
    */
  return (
    <TouchableOpacity
      style={{...styles.touchStyle, ...props.touchStyle}}
      activeOpacity={props.activeOpacity ? props.activeOpacity : 0.8}
      onPress={props.touchAction}>
      {(props.isImageRequired || props.useIcon) && (
        <View style={{...styles.icon, ...props.icon}}>
          <CustomIcon
            name={props.iconName}
            size={props.iconSize}
            color={props.iconColor}
          />
        </View>
      )}

      <View style={{...styles.textContainerStyle, ...props.textContainerStyle}}>
        <Text style={{...styles.textStyle, ...props.textStyle}}>
          {props.buttonTitle}
        </Text>
      </View>
      {props.useRightIcon ? (
        <View style={{marginRight: Rp(30)}}>
          <CustomIcon
            name="right-arrow-new"
            color={Color.dark.primaryContent}
            size={Rp(50)}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 20,
  },
  touchStyle: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  imageContainerStyle: {
    flex: 1,
  },
  textContainerStyle: {
    flex: 9,
  },
  textStyle: {
    fontSize: FontSize.normal,
  },
});

export default TouchAbleTextComp;
