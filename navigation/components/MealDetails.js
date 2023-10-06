import { View, StyleSheet, Text } from "react-native"


function MealsDetails({duration, complexity, affordability}) {
    return <View style={styles.detail}>
    <Text style={styles.detailItem}>{duration}m</Text>
    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
  </View>
}

export default MealsDetails

const styles = StyleSheet.create({
    detail: {
        // flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
      },
})