import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Card from './Card';
import imageType from '../utils/imageType';

/*
<-usage->
    <ImageCard
        cardStyle={styles.cardStyle}
        imageStyle={styles.imageStyle}
        imageUrl={imageUrl}
    />
*/

const ImageCard = props => {
  //required props
  const {containerStyle, cardStyle, imageStyle, imageUrl} = props;
  const {type, imagePath} = imageType(imageUrl);
  return (
    <View style={{...containerStyle}}>
      <Card style={{...cardStyle}}>
        <Image
          style={{...imageStyle}}
          source={type ? {uri: imagePath} : imagePath}
        />
      </Card>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({});
