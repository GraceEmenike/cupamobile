import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainHomeScreen from "./src/MainHomeScreen"
import CustomerSignInComponent from "./src/Customer/SignInCustomerScreen";
import BusinessSignInComponent from  "./src/Business/SignInBusinessScreen";
import RegisterBusinessComponent from "./src/Business/RegisterBusinessScreen";
import RegisterCustomerComponent from "./src/Customer/RegisterCustomerScreen";
import ProductComponent from "./src/Business/Drawer/Tabs/ProductTab"
import BusinessApp from './src/Business/BusinessApp';

const Stack = createStackNavigator();

function headerShownTest (route) {
  if(route.name.endsWith('Screen')){
    return true;
  }
  return false;
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MainHomeScreen'
          screenOptions= {
            ({ route }) => ({
              headerShown: headerShownTest(route)
            })
          }
        >
          <Stack.Screen
              name='Home'
              component={MainHomeScreen}
            />
          <Stack.Screen
            name='CustomerSignInScreen'
            component={CustomerSignInComponent}
          />
          <Stack.Screen
            name='BusinessSignInScreen'
            component={BusinessSignInComponent}
          />
          <Stack.Screen
            name='BusinessRegisterScreen'
            component={RegisterBusinessComponent}
          />
          <Stack.Screen
            name='CustomerRegisterScreen'
            component={RegisterCustomerComponent}
          />
          <Stack.Screen
            name='ProductScreen'
            component={ProductComponent}
          />
          <Stack.Screen
            name='BuisinessApp'
            component={BusinessApp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
