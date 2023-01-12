export default imageType = givenImagePath => {
  let type = isNaN(givenImagePath);
  let imagePath;
  if (!type) imagePath = parseInt(givenImagePath);
  else imagePath = givenImagePath;
  return {type, imagePath};
};
