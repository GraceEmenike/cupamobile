import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from 'react-native'

const Stack = createStackNavigator();

export default function OrdersComponent({navigation, route}){
    return (
        <Stack.Navigator 
            screenOptions={
                () => ({
                headerShown: false
                })
            }
        >
            <Stack.Screen name="Order Summary" component={OrderSummaryComponent} />
            <Stack.Screen name="Order Details" component={OrderDetailsComponent} />
        </Stack.Navigator>
    )
}

function OrderSummaryComponent({navigation, route}){
    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <Text>
                Welcome to TabA page!
            </Text>
            <Button 
            onPress={() => navigation.navigate('Order Details')}
            title="Go to TabA Details"
            />
        </View>
    )
}

function OrderDetailsComponent({navigation, route}){
    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <Text>
                TabA Details here!
            </Text>
        </View>
    )
}
