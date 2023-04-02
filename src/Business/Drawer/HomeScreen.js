import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from "react-native";
import ProductComponent from './Tabs/ProductTab'
import OrdersComponent from './Tabs/OrdersTab'
import DashboardComponent from './Tabs/DashboardTab';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'TabA') {
                        iconName === focused
                        ? 'information-circle-outline'
                        : 'information-circle-outline';
                    } else if (route.name === 'TabB') {
                        iconName === focused
                        ? 'list'
                        : 'list';
                    }
                    return <Ionicons name="list" size={size} color={color}/>;
                },
            })
            }
        >
            <Tab.Screen name='Dashboard' component={DashboardComponent} />
            <Tab.Screen name="Orders" component={OrdersComponent} />
            <Tab.Screen name="Product" component={ProductComponent} />
        </Tab.Navigator>
      );
  }

  export default HomeScreen