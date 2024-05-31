import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToMyCart,
  deleteMyCartItem,
  removeProductFromMyCart,
} from '../redux/MyCartSlice';
import {decreaseqty, increaseqty} from '../redux/MyProductSlice';

const MyCart = () => {
  const myCart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          backgroundColor: 'white',
          elevation: 1,
        }}>
        <Text>Redux Toolkit demo</Text>
      </View>
      <FlatList
        data={myCart}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '94%',
                alignSelf: 'center',
                height: 120,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
                elevation: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 100, height: 100, borderRadius: 10}}
              />
              <View style={{padding: 10}}>
                <Text>{item.name}</Text>
                <Text>{item.brand}</Text>
                <Text>{'Rs ' + item.price}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 7,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(removeProductFromMyCart(item));
                          dispatch(decreaseqty(item.id));
                        } else {
                          dispatch(deleteMyCartItem(item.id));
                          dispatch(decreaseqty(item.id));
                        }
                      }}>
                      <Text style={{color: 'white'}}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.qty == 0 ? null : (
                    <Text style={{marginLeft: 10, fontSize: 20}}>
                      {item.qty}
                    </Text>
                  )}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 7,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseqty(item.id));
                      }}>
                      <Text style={{color: 'white'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({});
