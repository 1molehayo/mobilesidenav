/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, RefreshControl, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppContainer} from '../components/AppContainer';
import {AppLoader} from '../components/AppLoader';
import {EmptySection} from '../components/EmptySection';
import {getUsers} from '../store/actions';
import {common} from '../styles/common.style';
import {color} from '../styles/variables.style';
import {handleErrorMsg, isArrayEmpty} from '../utility';
import {showMessage} from 'react-native-flash-message';
import {cardStyles} from '../styles/components/card.style';

const Users = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const toggleRefreshing = () => setRefreshing(prevState => !prevState);
  const usersState = useSelector(state => state.users);
  const {users, error, loading} = usersState;
  console.log(usersState);

  const fetchUsers = React.useCallback(async () => {
    toggleRefreshing();
    try {
      await dispatch(getUsers());
    } catch (err) {
      console.log(err);
    } finally {
      toggleRefreshing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getUsers());
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
              onRefresh={fetchUsers}
            />
          }>
          {isArrayEmpty(users) && <EmptySection />}

          {!isArrayEmpty(users) &&
            users.map((item, i) => (
              <View key={i} style={cardStyles.container}>
                <View style={cardStyles.textBox}>
                  <Text style={cardStyles.title}>{item.name}</Text>
                </View>
                <View style={cardStyles.line} />

                <View style={cardStyles.textBox}>
                  <View style={cardStyles.row}>
                    <View style={cardStyles.col1}>
                      <Text style={cardStyles.label}>Username:</Text>
                    </View>
                    <View style={cardStyles.col2}>
                      <Text>{item.username}</Text>
                    </View>
                  </View>

                  <View style={cardStyles.row}>
                    <View style={cardStyles.col1}>
                      <Text style={cardStyles.label}>Email:</Text>
                    </View>
                    <View style={cardStyles.col2}>
                      <Text>{item.email}</Text>
                    </View>
                  </View>

                  <View style={cardStyles.row}>
                    <View style={cardStyles.col1}>
                      <Text style={cardStyles.label}>Phone:</Text>
                    </View>
                    <View style={cardStyles.col2}>
                      <Text>{item.phone}</Text>
                    </View>
                  </View>

                  <View style={cardStyles.row}>
                    <View style={cardStyles.col1}>
                      <Text style={cardStyles.label}>Company:</Text>
                    </View>
                    <View style={cardStyles.col2}>
                      <Text>{item.company.name}</Text>
                    </View>
                  </View>

                  <View style={[cardStyles.row, {marginBottom: 0}]}>
                    <View style={cardStyles.col1}>
                      <Text style={cardStyles.label}>Website:</Text>
                    </View>
                    <View style={cardStyles.col2}>
                      <Text>{item.website}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </AppContainer>
  );
};

export default Users;
