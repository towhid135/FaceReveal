import {Platform, PermissionsAndroid, Alert} from 'react-native';

export const checkStorageWritePermission = async () => {
  // Function to check the platform
  // If iOS then start downloading
  // If Android then ask for permission

  if (Platform.OS === 'ios') {
    return true;
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download Photos',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Once user grant the permission start downloading
        console.log('Storage Permission Granted.');
        return true;
      } else {
        // If permission denied then show alert
        Alert.alert('Storage Permission Not Granted');
        return false;
      }
    } catch (err) {
      // To handle permission related exception
      console.warn(err);
      return false;
    }
  }
};
