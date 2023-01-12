import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import BlurBodyComp from '@components/BlurBodyComp';

const CustomModal = props => {
  const {
    container,
    blurBodyProps,
    touchStyle,
    touchPressHandler,
    modalState,
    children,
    touchOpacity,
  } = props;
  return (
    <View style={{...styles.container, ...container}}>
      <Modal
        animationType="fade"
        transparent
        visible={modalState}
        statusBarTranslucent={true}>
        <BlurBodyComp {...blurBodyProps}>
          <TouchableOpacity
            activeOpacity={touchOpacity ? touchOpacity : 1}
            onPress={touchPressHandler}
            style={{...styles.touchStyle, ...touchStyle}}>
            {children}
          </TouchableOpacity>
        </BlurBodyComp>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchStyle: {
    flex: 1,
  },
});
