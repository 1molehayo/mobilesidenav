import React, {useEffect, useState} from 'react';
import {Text, View, RefreshControl, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppContainer} from '../components/AppContainer';
import {AppLoader} from '../components/AppLoader';
import {EmptySection} from '../components/EmptySection';
import {getPosts} from '../store/actions';
import {common} from '../styles/common.style';
import {color} from '../styles/variables.style';
import {handleErrorMsg, isArrayEmpty} from '../utility';
import {showMessage} from 'react-native-flash-message';
import {cardStyles} from '../styles/components/card.style';

const Posts = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const toggleRefreshing = () => setRefreshing(prevState => !prevState);
  const postsState = useSelector(state => state.posts);
  const {posts, error, loading} = postsState;
  console.log(postsState);

  const fetchPosts = React.useCallback(async () => {
    toggleRefreshing();
    try {
      await dispatch(getPosts());
    } catch (err) {
      console.log(err);
    } finally {
      toggleRefreshing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getPosts());
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
              onRefresh={fetchPosts}
            />
          }>
          {isArrayEmpty(posts) && <EmptySection />}

          {!isArrayEmpty(posts) &&
            posts.map((item, i) => (
              <View key={i} style={cardStyles.container}>
                <View style={cardStyles.textBox}>
                  <Text style={cardStyles.title}>{item.title}</Text>
                </View>
                <View style={cardStyles.line} />
                <View style={cardStyles.textBox}>
                  <Text>{item.body}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </AppContainer>
  );
};

export default Posts;
