import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Input, Icon, Stack, Pressable } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { AlertComponent } from '../Components/FeedBack/Alert';

export default function App({navigation, route}) {
  const [show, setShow] = React.useState(false);
  const [alert, setShowAlert] = React.useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.registerInstruction}>Create your by account entering your business name and password for authentication</Text>
      </View>
      <View>
        <Stack space={4} w="100%" alignItems="center">
          <Input 
            w={{
              base: "75%",
              md: "25%"
            }}
            InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Business Name" />
          <Input 
            w={{
              base: "75%",
              md: "25%"
            }}
            size="sm" placeholder="Email" 
          />
          <Input 
            w={{
              base: "75%",
              md: "25%"
            }}
            size="sm" placeholder="Address" 
          />
          <Input 
            w={{
              base: "75%",
              md: "25%"
            }} 
            type={show ? "text" : "password"} 
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon 
                  as={
                    <MaterialIcons 
                      name={show ? "visibility" : "visibility-off"} 
                    />} 
                  size={5} 
                  mr="2" 
                  color="muted.400" 
                />
              </Pressable>
            } 
            placeholder="Password" 
          />
      </Stack>
      </View>
      <TouchableOpacity
        onPress={() => { setShowAlert(true); console.log("I will register a business"); }}>
        <View>
          <Text style={styles.registerButton}>Register</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate("BusinessSignInScreen"); }}>
        <View>
          <Text style={styles.registerButton}>Already have an account? Sign In</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />

      <AlertComponent showAlert={alert} />
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
  registerInstruction: {
    fontSize: 12,
    marginTop: 100,
    width: 300,
    height: 40,
    alignItems: 'center',
    textAlign: 'center'
  },
  registerButton: {
    color: '#61382A',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5
  },
});
