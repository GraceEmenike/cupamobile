import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';

const myImage = require('../assets/coffee_shop.jpeg');
const image = { uri: "https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"}

const MainHomeScreen = ({navigation, route }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={myImage} resizeMode='cover' style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Cupa</Text>
          <Text style={styles.header}>Transform your business</Text>
          <Text style={styles.header}>Get Insights</Text>
          <TouchableOpacity style={styles.myButton}
            onPress={() => { navigation.navigate("BusinessSignInScreen");}}>
            <View>
              <Text style={styles.myButtonText}>Sign in as Business</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myButton}
            onPress={() => { navigation.navigate("CustomerSignInScreen");}}>
            <View>
              <Text style={styles.myButtonText}>Sign in as Customer</Text>
            </View>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  myButton: {
    marginBottom: 10,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#61382A',
    borderRadius: 4.
  },
  myButtonText: {
    textAlign: 'center',
    paddingTop: 5,
    paddingRight: 30,
    paddingLeft: 30,
    fontSize: 16,
    color: 'white'
  }
});

export default MainHomeScreen
