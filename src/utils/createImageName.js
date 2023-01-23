export default createImageName = extension => {
  // To add the time suffix in filename
  let date = new Date();
  const imageName =
    '/image_' +
    Math.floor(date.getTime() + date.getSeconds() / 2) +
    '.' +
    extension;

  return imageName;
};
