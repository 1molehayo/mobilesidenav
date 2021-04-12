import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Image, ImageBackground, ActivityIndicator, View} from 'react-native';
import {imageStyles} from '../styles/common.style';
import {color} from '../styles/variables.style';

export const CustomImage = ({
  source,
  isBackground,
  style,
  imageStyle,
  children,
  width,
  height,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  if (isBackground) {
    return (
      <ImageBackground
        style={style}
        onLoadEnd={() => setIsImageLoading(false)}
        imageStyle={imageStyle}
        source={source}>
        {isImageLoading ? (
          <View style={imageStyles.loader}>
            <ActivityIndicator
              animating={isImageLoading}
              color={color.PRIMARY}
            />
          </View>
        ) : null}

        {children}
      </ImageBackground>
    );
  }

  return (
    <View style={[imageStyles.container, {width, minHeight: height || 20}]}>
      <Image
        style={style}
        onLoadEnd={() => setIsImageLoading(false)}
        source={source}
      />

      {isImageLoading ? (
        <View style={imageStyles.loader}>
          <ActivityIndicator animating={isImageLoading} color={color.PRIMARY} />
        </View>
      ) : null}
    </View>
  );
};

CustomImage.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isBackground: PropTypes.bool,
  source: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  imageStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
