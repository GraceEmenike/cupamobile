import { createStackNavigator } from "@react-navigation/stack";
import { Column } from "native-base";
import { View, SafeAreaView, ScrollView, Text, Button } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import BusinessStyles from "../../BusinessStyles"; 
import { data, datatoo, chartData } from "../../data";
import { LineChart } from "react-native-chart-kit"
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const Stack = createStackNavigator();

export default function DashboardComponent({navigation, route}){
    return (
        <Stack.Navigator 
            screenOptions={
                () => ({
                headerShown: false
                })
            }
        >
            <Stack.Screen name="Dashboard Summary" component={DashboardSummaryComponent} />
            <Stack.Screen name="Dashboard Details" component={DashboardDetailsComponent} />
        </Stack.Navigator>
    )
}

function DashboardSummaryComponent({navigation, route}){
    return (
        <View
            style={[BusinessStyles.dashboardContainer]}
            >
            <BusinessSummaryComponent />
            <BusinessInsightComponent />
            <BusinessChartsComponent />
        </View>
        
    )
}

function BusinessSummaryComponent({navigation}){
    return (
        <View style={[]}>
            <View>
                <Text style={BusinessStyles.dashboardHeadings }>Today's Summary</Text>
            </View>
            <View style= {[BusinessStyles.dashboardComponents, {flexDirection: 'row', marginVertical: 3 }]}>
                <View style={[BusinessStyles.summaryContainer]}>
                    {data.summary.map((item) => (
                        <View style={[BusinessStyles.summaryItemsBox]} key={item.name}>
                            <Text style={{textAlign: 'center'}}>
                                {item.name}
                            </Text>
                            <Button
                                onPress={() => navigation.navigate('Dashboard Details')}
                                title={item.value}
                            />
                        </View>
                    ))}
                </View>
            </View>
            
        </View>
        
    )
}

function BusinessInsightComponent(){
    return (
        <View style={[BusinessStyles.insightContainer]}>
            <View>
                <Text style={BusinessStyles.dashboardHeadings }>Business Insight Summary</Text>
            </View>
            <SafeAreaView style={[BusinessStyles.dashboardComponents, {flex:1}]}>
                <View style= {{}}>
                    <Text>Hot Products</Text>
                </View>
                <ScrollView>
                    <View style={{flex:1, flexDirection:'row', flexWrap: 'wrap' }}>
                        {datatoo.summary.map((item) => (
                            <View style={[BusinessStyles.insightItemsBox]} key={item.name}>
                                <Text style={{textAlign: 'center', fontSize: 10}}>
                                    {item.name}
                                </Text>
                                <TouchableOpacity>
                                    <Text>{item.value}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
            
            
        </View>
    )
}

function BusinessChartsComponent(){
    return (
        <View style={[BusinessStyles.chartsContainer]}>
            <View>
                <Text style={BusinessStyles.dashboardHeadings }>Charts</Text>
            </View>
            <View style= {[BusinessStyles.dashboardComponents]}>
                <Text>
                    Your Charts with show here!
                </Text>
                <LineChart
                    data={chartData}
                    width={screenWidth * 0.9}
                    height={220}
                    chartConfig={BusinessStyles.chartConfig}
                />
            </View>
            
        </View>
    )
}


// TODO: Move this to a new tab
function DashboardDetailsComponent({navigation, route}){
    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center', backgroundColor: 'yellow' }}>
                <Text>
                    Welcome to TabA page!
                </Text>
                <Button 
                    onPress={() => navigation.navigate('Dashboard Details')}
                    title="Go to Dashboard Details"
                />
            </View>
        </View>
    )
}