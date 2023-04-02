import { StyleSheet } from "react-native";

export default businessStyles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    summaryContainer: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(195, 177, 187, 0.2)',
    },
    insightContainer: {
        flex: 2,
    },
    chartsContainer: {
        flex: 2,
    },
    dashboardComponents: {
        marginBottom: 10,
        borderStyle: 'dashed',
        borderColor: '#b7c2c6',
        borderWidth: 1
    },
    summaryItemsBox: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    insightItemsBox: {
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '23%',
        height: 100,
    },
    dashboardHeadings: {
        fontSize: 16,
        color: '#000',
        fontWeight: 500,
        marginTop: 10,
        marginBottom: 5
    },
    chartConfig: {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#61382A",
        backgroundGradientToOpacity: 0.2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    }
});