import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addMyProducts, decreaseqty, increaseQty, increaseqty} from '../redux/MyProductSlice';
import {addProductToMyCart, deleteMyCartItem, removeProductFromMyCart} from '../redux/MyCartSlice';
let items = [
  {
    id: 0,
    image:
      'https://reebok.bynder.com/m/32e5f94b44c3ed31/webimage-23SS_Men-Shoes_FD_IWP-Tile-BB_MB.png',
    name: 'XYZ',
    brand: 'puma',
    price: 2500,
    qty: 0,
  },
  {
    id: 1,
    image:
      'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21725622/2023/7/11/4b35dcc6-8d20-4e46-a5f8-53cde3f384741689078273510-Red-Tape-Men-Mesh-Sneakers-3221689078273173-1.jpg',
    name: 'ABC',
    brand: 'Adidas',
    price: 2800,
    qty: 0,
  },
  {
    id: 2,
    image:
      'https://www.ndure.com/cdn/shop/files/1_9dfea1d5-4efd-4346-850a-69f12f2a8fe4.jpg?v=1689833182',
    name: 'Ndure',
    brand: 'Ndure',
    price: 3000,
    qty: 0,
  },
];
const MyProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const myProduct = useSelector(state => state.products);
  const myCart = useSelector(state => state.cart);
  useEffect(() => {
    myProduct.length > 1
      ? null
      : items.map(item => {
          dispatch(addMyProducts(item));
        });
  }, []);
  console.log('added products in cart', myCart);

  const getTotal = () => {
    let total = 0;
    myCart.map(item => {
      total += item.qty * item.price;
    });
    return total;
  };
  return (
    <View style={{flex: 1}}>
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
        data={myProduct}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '94%',
                alignSelf: 'center',
                height: 120,
                backgroundColor:"white",
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
                  {item.qty === 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 7,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseqty(item.id))
                      }}>
                      <Text style={{color: 'white'}}>Add To Cart</Text>
                    </TouchableOpacity>
                  ) : null}
                  {item.qty === 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 7,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        marginLeft: 10,
                      }} onPress={() => {
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
                  {item.qty === 0 ? null : (
                    <Text style={{marginLeft: 10, fontSize: 20}}>{item.qty}</Text>
                  )}
                  {item.qty === 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 7,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        marginLeft: 10,
                      }}  onPress={() => {
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
      {myCart.length>0?( <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{'added items (' + myCart.length + ')'}</Text>
          <Text>{'Total: ' + getTotal()}</Text>
        </View>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '70%',
              height: 35,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
            }} onPress={()=>navigation.navigate("Cart")}>
            <Text style={{color: 'white'}}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </View>):null}
     
    </View>
  );
};

export default MyProduct;

const styles = StyleSheet.create({});
