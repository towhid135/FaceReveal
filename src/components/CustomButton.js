import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Rp from '../constant/Rp';
import CustomIcon from './CustomIcon';
import CustomFont from '../constant/CustomFont';
import Color from '../constant/Color';
import FontSize from '../constant/FontSize';

const CustomButton = props => {
  /*required props
    btnName - string
    btnColor - array
    showActivity - bool
    isIconAvailable - bool
    iconName - string
    iconColor - string
    iconSize - int
    buttonText - style the text of button
    using-----------
     <CustomButton
        btnName="Sign In"
        buttonStyle={{backgroundColor: Color.dark.base}}
        showActivity={false}
        isIconAvailable={true}
        iconName="right-arrow"
        iconColor={Color.dark.primaryContent}
      />
    */
  return (
    <View style={{...styles.buttonStyle, ...props.buttonStyle}}>
      <TouchableOpacity
        onPress={props.onPressHandler}
        style={{...styles.touchStyle, ...props.touchStyle}}
        activeOpacity={0.8}>
        {!props.showActivity && (
          <View
            style={{...styles.textAndIconHolder, ...props.textAndIconHolder}}>
            <View>
              <Text style={{...styles.buttonText, ...props.buttonText}}>
                {props.btnName}
              </Text>
            </View>
            {props.isIconAvailable && (
              <View style={{...props.iconContainer, left: Rp(15)}}>
                <CustomIcon
                  name={props.iconName}
                  color={props.iconColor}
                  style={props.iconStyle}
                  size={props.iconSize ? props.iconSize : 15}
                />
              </View>
            )}
          </View>
        )}
        {props.showActivity && (
          <View style={{...styles.activityView, ...props.activityView}}>
            <ActivityIndicator
              size="small"
              color={props.indicatorColor ? props.indicatorColor : 'white'}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: Rp(350),
    height: Rp(100),
    borderRadius: Rp(60),
    backgroundColor: Color.dark.base,
  },
  touchStyle: {
    flex: 1,
  },
  buttonText: {
    fontFamily: CustomFont.robotoMedium,
    color: Color.dark.base,
    fontSize: FontSize.normal,
  },
  textAndIconHolder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default CustomButton;
