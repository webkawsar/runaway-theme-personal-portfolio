const imagePath = (image) => {

  if (image?.data?.attributes?.formats?.large?.url) {

    return image?.data?.attributes?.formats?.large?.url;

  } else if(image?.data?.attributes?.formats?.medium?.url) {
    
    return image?.data?.attributes?.formats?.medium?.url

  } else if(image?.data?.attributes?.formats?.small?.url) {

    return image?.data?.attributes?.formats?.small?.url
  } else {

    return image?.data?.attributes?.formats?.thumbnail?.url
  }
};
