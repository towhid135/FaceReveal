import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const BlurBodyComp = props => {
  const {handleModal, blurAmount, blurType} = props;
  //console.log('handle modal: ', onPress);
  return (
    <View style={{flex: 1}}>
      <Pressable
        //activeOpacity={1}
        style={{...styles.absolute, flex: 1}}
        onPressOut={handleModal}>
        <BlurView
          style={styles.absolute}
          blurType={blurType ? blurType : 'dark'}
          blurAmount={blurAmount ? blurAmount : 5}
          reducedTransparencyFallbackColor="transparent"
        />
      </Pressable>
      {props.children}
    </View>
  );
};

export default BlurBodyComp;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
