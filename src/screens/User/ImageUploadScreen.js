import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Color from '@constant/Color';
import Rp from '@constant/Rp';
import CustomButton from '@components/CustomButton';
import ImageCard from '@components/ImageCard';
import SubImageLoaderComp from '@components/SubImageLoaderComp';
import CameraAndGallerySelectionModal from '@components/CameraAndGallerySelectionModal';

const ImageSize = Rp(700);
const parentImageSize = Rp(550);

const imageUrl = require('../../../assets/Images/avatar.png');

const subImageList = [
  {
    imageUrl: require('../../../assets/Images/avatar.png'),
  },
  {
    imageUrl: require('../../../assets/Images/avatar.png'),
  },
  {
    imageUrl: require('../../../assets/Images/avatar.png'),
  },
  {
    imageUrl: require('../../../assets/Images/avatar.png'),
  },
];

const ImageUploadScreen = () => {
  const [state, setState] = useState({
    isCustomModalOpen: false,
    ImageUrl: undefined,
  });
  const toggleCustomModal = () => {
    setState(prev => ({...prev, isCustomModalOpen: !prev.isCustomModalOpen}));
  };
  const getCameraAndGalleryImageUrl = ImageUrl => {
    setState(prev => ({...prev, ImageUrl}));
    toggleCustomModal();
  };
  const uploadPressHandler = ImageUrl => {
    toggleCustomModal();
  };
  const firstBtnName = state.ImageUrl ? 'Recover' : 'Upload';
  return (
    <ScrollView
      style={styles.scrollViewStyle}
      showsVerticalScrollIndicator={false}>
      <View style={styles.cardAndBtnContainer}>
        <ImageCard
          cardStyle={styles.cardStyle}
          imageStyle={styles.imageStyle}
          imageUrl={!state.ImageUrl ? imageUrl : state.ImageUrl}
        />
        <View style={styles.btnContainerView}>
          <CustomButton
            btnName={firstBtnName}
            onPressHandler={uploadPressHandler}
            buttonStyle={{
              backgroundColor: Color.dark.primaryContent,
              width: Rp(500),
            }}
            showActivity={false}
            isIconAvailable={false}
            // iconName="right-arrow"
            iconColor={Color.dark.base}
            textAndIconHolder={{flexDirection: 'row-reverse'}}
          />
        </View>
        <View style={styles.SubImageLoaderHolderView}>
          <SubImageLoaderComp
            containerStyle={styles.SubImageLoaderCompContainer}
            imageSize={Rp(200)}
            subImageList={subImageList}
          />
        </View>
        <View style={styles.parentImageViewHolder}>
          <ImageCard
            cardStyle={styles.parentImageCardStyle}
            imageStyle={styles.parentImageStyle}
            imageUrl={imageUrl}
          />
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
          <CameraAndGallerySelectionModal
            modalVisible={state.isCustomModalOpen}
            initialModalVisibleValue={toggleCustomModal}
            useIcon={true}
            // onPressAppGallery={appGalleryActionHandler}
            onImageTake={getCameraAndGalleryImageUrl}
            cameraAspectRatio={{cWidth: 450, cHeight: 450}}
            galleryAspectRatio={{gWidth: 450, gHeight: 450}}
            noAppGalleryRequired={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ImageUploadScreen;

const styles = StyleSheet.create({
  cardAndBtnContainer: {
    alignItems: 'center',
    marginTop: Rp(120),
    // borderWidth: 1,
    // borderColor: 'green',
  },
  cardStyle: {
    width: ImageSize,
    // borderWidth: 1,
    // borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Rp(25),
  },
  imageStyle: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: Rp(25),
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: Color.dark.base,
  },
  btnContainerView: {
    alignItems: 'center',
    marginTop: Rp(75),
  },
  SubImageLoaderHolderView: {
    marginTop: Rp(50),
    // borderWidth: 1,
    // borderColor: 'green',
  },
  SubImageLoaderCompContainer: {
    // justifyContent: 'space-around',
  },
  parentImageViewHolder: {
    marginBottom: Rp(100),
    alignItems: 'center',
  },
  parentImageCardStyle: {
    width: parentImageSize,
    // borderWidth: 1,
    // borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Rp(25),
  },
  parentImageStyle: {
    height: parentImageSize,
    width: parentImageSize,
    borderRadius: Rp(25),
  },
});
