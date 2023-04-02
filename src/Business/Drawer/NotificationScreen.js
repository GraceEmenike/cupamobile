import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Button, Text } from "react-native";

const Tab = createBottomTabNavigator();


function NotificationsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>You have no new notifications</Text>
          <Button 
          onPress={() => navigation.goBack()}
          title="Go back to Dashboard"
          />
        </View>
      );
  }

  export default NotificationsScreen