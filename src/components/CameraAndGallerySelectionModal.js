import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../constant/Color';
import CustomFont from '../constant/CustomFont';
import Rp from '../constant/Rp';
import BlurBodyComp from './BlurBodyComp';

import TouchAbleTextComp from './TouchAbleTextComp';

import ImagePicker from 'react-native-image-crop-picker';

const {width} = Dimensions.get('window');

const CameraAndGallerySelectionModal = props => {
  const {cWidth, cHeight} = props.cameraAspectRatio;
  const {gWidth, gHeight} = props.galleryAspectRatio;
  const [pickedImage, setPickedImage] = useState(' ');
  //console.log('inside custom modal', cWidth, cHeight, gWidth, gHeight);

  const CapturePhoto = async () => {
    //const {status} = await ImagePicker.requestCameraPermissionsAsync();
    //new code starts
    ImagePicker.openCamera({
      width: cWidth,
      height: cHeight,
      cropping: true,
      // compressImageMaxWidth: 450,
      // compressImageMaxHeight: 350,
      compressImageQuality: 1.0,
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        props.onImageTake(image.path);
      })
      .catch(err => {
        console.log('camera open error', err);
      });
  };

  const GalleryImage = async () => {
    console.log('gallery image pressed ');
    ImagePicker.openPicker({
      width: gWidth,
      height: gHeight,
      cropping: true,
      // cropperCircleOverlay: true,
      // compressImageMaxWidth: 450,
      // compressImageMaxHeight: 250,
      compressImageQuality: 1.0,
      // includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        console.log('image path ', image.path);
        props.onImageTake(image.path);
      })
      .catch(err => {
        console.log('gallery open error', err);
      });
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent
        visible={props.modalVisible}
        statusBarTranslucent={true}>
        <BlurBodyComp>
          <TouchableOpacity
            style={{
              ...styles.touchableTextContainerStyle,
              ...props.containerStyle,
            }}
            onPressIn={props.initialModalVisibleValue}>
            {!props.noCameraRequired && (
              <TouchAbleTextComp
                touchAction={CapturePhoto}
                buttonTitle={props.firstText ? props.firstText : 'Open Camera'}
                // buttonTitle="Open Camera"
                useIcon={props.useIcon ? true : props.useIcon}
                iconName="camera-normal"
                iconSize={width * 0.065}
                iconColor={Color.dark.primary}
                touchStyle={{
                  ...styles.touchableTextTouchStyle,
                  // borderTopLeftRadius: !props.noCameraRequired ? 0 : 10,
                  borderTopLeftRadius: 10,
                  // borderTopRightRadius: !props.noCameraRequired ? 0 : 10,
                  borderTopRightRadius: 10,
                }}
                imageContainerStyle={styles.touchableTextImageContainerStyle}
                imageStyle={styles.touchableTextImageStyle}
                textContainerStyle={{
                  ...styles.touchableTextmainTextContainer,
                  ...props.mainTextContainer,
                }}
                textStyle={{
                  ...styles.textStyle,
                  ...props.textStyle,
                  ...props.firstTextStyle,
                }}
                useRightIcon={props.useRightIcon}
              />
            )}
            {props.onlyTwoButtons ? null : (
              <TouchAbleTextComp
                buttonTitle={
                  props.firstText ? props.secondText : 'Choose From Gallery'
                }
                touchAction={GalleryImage}
                useIcon={props.useIcon ? true : props.useIcon}
                iconName="Image"
                iconSize={width * 0.065}
                iconColor={Color.dark.primary}
                touchStyle={{
                  ...styles.touchableTextTouchStyle,
                  // borderTopLeftRadius: !props.noCameraRequired ? 0 : 10,
                  // borderTopRightRadius: !props.noCameraRequired ? 0 : 10,
                }}
                imageContainerStyle={styles.touchableTextImageContainerStyle}
                imageStyle={styles.touchableTextImageStyle}
                textContainerStyle={{
                  ...styles.touchableTextmainTextContainer,
                  ...props.mainTextContainer,
                }}
                textStyle={{...styles.textStyle, ...props.textStyle}}
                useRightIcon={props.useRightIcon}
              />
            )}
            {!props.noAppGalleryRequired && (
              <TouchAbleTextComp
                buttonTitle={
                  props.firstText ? props.thirdText : 'Choose From App Gallery'
                }
                touchAction={
                  props.thirdTouchAction
                    ? props.thirdTouchAction
                    : props.onPressAppGallery
                }
                useIcon={props.useIcon ? true : props.useIcon}
                iconName="gallery"
                iconSize={width * 0.065}
                iconColor={Color.dark.primary}
                touchStyle={{
                  ...styles.touchableTextTouchStyle,
                  // borderTopLeftRadius: !props.noCameraRequired ? 0 : 10,
                  borderBottomLeftRadius: 10,
                  // borderTopRightRadius: !props.noCameraRequired ? 0 : 10,
                  borderBottomRightRadius: 10,
                }}
                imageContainerStyle={styles.touchableTextImageContainerStyle}
                imageStyle={styles.touchableTextImageStyle}
                textContainerStyle={{
                  ...styles.touchableTextmainTextContainer,
                  ...props.mainTextContainer,
                }}
                textStyle={{
                  ...styles.textStyle,
                  ...props.textStyle,
                  ...props.thirdTextStyle,
                }}
                useRightIcon={props.useRightIcon}
              />
            )}
            <TouchAbleTextComp
              isImageRequired={false}
              useIcon={false}
              touchAction={props.initialModalVisibleValue}
              buttonTitle="Cancel"
              touchStyle={{
                ...styles.touchableTextTouchStyle,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                marginTop: 5,
                marginBottom:
                  Platform.OS === 'ios' ? width * 0.028 : width * (2 / width),
              }}
              textContainerStyle={{
                ...styles.touchableTextmainTextContainer,
                flex: 1,
                alignItems: 'center',
                color: 'black',
              }}
              textStyle={{
                fontFamily: CustomFont.robotoRegular,
                color: Color.dark.primary,
                fontSize: Rp(50),
              }}
              // same color as in the touchable text component
            />
          </TouchableOpacity>
        </BlurBodyComp>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: CustomFont.robotoRegular,
    color: Color.dark.primaryContent,
    fontSize: Rp(45),
  },
  touchableTextContainerStyle: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'green',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(196,196,196,0.5)',
  },
  touchableTextTouchStyle: {
    // borderWidth: 1,
    // borderColor: 'red',
    height: '7%',
    width: width * 0.93,
    padding: width * 0.005,
    // backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: Color.dark.base,
  },
  touchableTextImageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.03,
  },
  touchableTextmainTextContainer: {
    // borderWidth: 1,
    // borderColor: 'green',
    justifyContent: 'center',
    color: Color.dark.primaryContent,
  },
  touchableTextImageStyle: {
    height: width * 0.054,
    width: width * 0.058,
  },
});

export default CameraAndGallerySelectionModal;
