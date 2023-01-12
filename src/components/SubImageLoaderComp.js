import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ImageCard from './ImageCard';
import Rp from '@constant/Rp';
import CustomModal from './CustomModal';
import CustomButton from '@components/CustomButton';
import Color from '@constant/Color';

const ImageSize = Rp(700);

const SubImageLoaderComp = props => {
  const {containerStyle, imageSize, subImageList} = props;
  const [state, setState] = useState({
    isModalVisible: false,
    item: {imageUrl: undefined},
  });

  const setItem = item => {
    setState(prev => ({...prev, item}));
  };

  const toggleModal = () => {
    setState(prev => ({...prev, isModalVisible: !prev.isModalVisible}));
  };
  const subImagePressHandler = item => {
    toggleModal();
    setItem(item);
    console.log('item: ', item);
    console.log('sub image pressed');
  };

  return (
    <View style={{...styles.containerStyle, ...containerStyle}}>
      {subImageList.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={subImagePressHandler.bind(this, item)}>
            <ImageCard
              cardStyle={{...styles.cardStyle, width: imageSize}}
              imageStyle={{
                ...styles.imageStyle,
                height: imageSize,
                width: imageSize,
              }}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        );
      })}
      <CustomModal
        touchStyle={styles.customModalTouchStyle}
        touchPressHandler={toggleModal}
        modalState={state.isModalVisible}>
        <TouchableOpacity activeOpacity={1}>
          <ImageCard
            cardStyle={styles.downloadImageCardStyle}
            imageStyle={styles.downloadImageImageStyle}
            imageUrl={state.item.imageUrl}
          />
        </TouchableOpacity>
        <CustomButton
          btnName="Download"
          buttonStyle={{
            backgroundColor: Color.dark.primaryContent,
            width: Rp(500),
            marginTop: Rp(50),
          }}
          showActivity={false}
          isIconAvailable={false}
          // iconName="right-arrow"
          iconColor={Color.dark.base}
          textAndIconHolder={{flexDirection: 'row-reverse'}}
        />
      </CustomModal>
    </View>
  );
};

export default SubImageLoaderComp;

const styles = StyleSheet.create({
  containerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cardStyle: {
    // width: ImageSize,
    // borderWidth: 1,
    // borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Rp(25),
    marginBottom: Rp(50),
    marginLeft: Rp(200),
  },
  imageStyle: {
    // height: ImageSize,
    // width: ImageSize,
    borderRadius: Rp(25),
  },
  downloadImageCardStyle: {
    width: ImageSize,
    // borderWidth: 1,
    // borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Rp(25),
  },
  downloadImageImageStyle: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: Rp(25),
  },
  customModalTouchStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
