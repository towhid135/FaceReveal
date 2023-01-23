import {Alert} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import getFileExtension from './getFileExtension';
import createImageName from './createImageName';

let options = {
  fileCache: true,
  addAndroidDownloads: {
    // Related to the Android only
    useDownloadManager: true,
    path: '',
    notification: true,
    description: 'Image',
  },
};

export default downloadImage = filePath => {
  const {config, fs} = RNFetchBlob;
  //get the phone's picture directory
  let PictureDir = fs.dirs.PictureDir;

  //get image extension
  const extension = getFileExtension(filePath);
  //create random name for image
  const imageName = createImageName(extension[0]);
  const downloadPath = PictureDir + imageName;

  config({
    ...options,
    addAndroidDownloads: {...options.addAndroidDownloads, path: downloadPath},
  })
    .fetch('GET', filePath)
    .then(res => {
      // Showing alert after successful downloading
      // console.log('res -> ', JSON.stringify(res));
      Alert.alert('Image Downloaded Successfully.');
    });
};
