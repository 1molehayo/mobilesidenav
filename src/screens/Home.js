import React, {useEffect, useState} from 'react';
import {ScrollView, RefreshControl, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {AppContainer} from '../components/AppContainer';
import {CustomImage} from '../components/CustomImage';
import {getPhotos} from '../store/actions/index';
import {AppLoader} from '../components/AppLoader';
import {showMessage} from 'react-native-flash-message';
import {handleErrorMsg, isArrayEmpty} from '../utility';
import {color} from '../styles/variables.style';
import {common} from '../styles/common.style';
import {EmptySection} from '../components/EmptySection';
import {cardStyles} from '../styles/components/card.style';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const toggleRefreshing = () => setRefreshing(prevState => !prevState);
  const dispatch = useDispatch();
  const photosState = useSelector(state => state.photos);
  const {photos, error, loading} = photosState;
  console.log(photosState);

  const fetchPhotos = React.useCallback(async () => {
    toggleRefreshing();
    try {
      await dispatch(getPhotos());
    } catch (err) {
      console.log(err);
    } finally {
      toggleRefreshing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getPhotos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      const errorMsg = handleErrorMsg(error);
      showMessage({message: `${errorMsg}`, type: 'danger'});
    }
  }, [error]);

  return (
    <AppContainer>
      {loading && <AppLoader />}

      <View>
        <ScrollView
          contentContainerStyle={common.scrollContainer}
          refreshControl={
            <RefreshControl
              tintColor={color.PRIMARY}
              refreshing={refreshing}
              onRefresh={fetchPhotos}
            />
          }>
          {isArrayEmpty(photos) && <EmptySection />}

          {!isArrayEmpty(photos) &&
            photos.map((item, i) => (
              <View key={i} style={cardStyles.container}>
                <CustomImage
                  source={{uri: item.thumbnailUrl}}
                  style={cardStyles.image}
                  width="100%"
                  height={150}
                />
                <View style={cardStyles.textBox}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </AppContainer>
  );
};

export default Home;
