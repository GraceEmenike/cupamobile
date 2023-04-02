import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BASE_URL = "https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist"
const products = [
  {
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99,
    img: `${BASE_URL}/shoe1.png`
  },
  {
    name: 'Camo Fang Backpack Jungle',
    price: 39.99,
    img: `${BASE_URL}/jacket1.png`
  },
  {
    name: 'Parka and Quilted Liner Jacket',
    price: 49.99,
    img: `${BASE_URL}/jacket2.png`
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    img: `${BASE_URL}/hat1.png`
  },
  {
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99,
    img: `${BASE_URL}/shoe1.png`
  },
  {
    name: 'Camo Fang Backpack Jungle',
    price: 39.99,
    img: `${BASE_URL}/jacket1.png`
  },
  {
    name: 'Parka and Quilted Liner Jacket',
    price: 49.99,
    img: `${BASE_URL}/jacket2.png`
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    img: `${BASE_URL}/hat1.png`
  },
];

export default function ProductComponent({navigation, route}){
  return (
    <Stack.Navigator
      screenOptions={
        () => ({
          headerShown: false
        })
      }
    >
      <Stack.Screen name='ProductSummary' component={ProductSummary}/>
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>
  )
}

function ProductSummary({navigation, route}) {
  return(
    <ScrollView>
      <View style={styles.container}>
        {
          products.map((product, index) => {
            return(
              <View style={styles.product} key={index} >
                  <ProductCard product={product}/>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  );
}

function ProductDetails({navigation, route}){
  return(
    <View>
      <Text>This is the product details page</Text>
    </View>
  )
}

function ProductCard({product}){
  return (
    <View>
      <Image
          style={{height:100}}
          resizeMode="contain"
          source={{ uri: product.img }}
        />
        <Card.Title numberOfLines={1} style={styles.productText}>{product.name}</Card.Title>
      <Card.Divider/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  product:{
    width: '40%',
    margin: 10,
  }, 
  productText: {
    textAlign: 'center'
  }
});