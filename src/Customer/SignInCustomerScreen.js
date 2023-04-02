import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Input, Icon, Stack, Pressable } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

export default function App({ navigation }) {
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.signInInstruction}>Enter your account details</Text>
      </View>
      <View>
        <Stack space={4} w="100%" alignItems="center">
          <Input 
            w={{
              base: "75%",
              md: "25%"
            }}
            InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Username or email" />
          <Input 
            w={{
              base: "75%",
              md: "25%"
            }} 
            type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
              </Pressable>} placeholder="Password" />
      </Stack>
      <TouchableOpacity
        onPress={() => { console.log('I will reset password for business'); }}>
        <View>
          <Text style={[styles.signButton, styles.forgotPasswordButton]}>Forgot Password</Text>
        </View>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => { console.log("I will sign in a customer"); }}>
        <View>
          <Text style={styles.signButton}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate("CustomerRegisterScreen"); }}>
        <View>
          <Text style={styles.signButton}>New to Cupa? Create your account</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  signInInstruction: {
    fontSize: 12,
    marginTop: 100,
    width: 300,
    height: 40,
    alignItems: 'center',
    textAlign: 'center'
  },
  forgotPasswordButton: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5
  },
  signButton: {
    color: '#61382A',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5
  }
});
