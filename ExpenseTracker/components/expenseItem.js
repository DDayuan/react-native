import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/style";
import getFormattedDate from "../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({description, date, amount}) {
    const navigation = useNavigation();
    function expensePressHandler() {
        navigation.navigate('EditExpeses')
    }
    return <Pressable onPress={expensePressHandler }>
        <View style={styles.expenseItem}>
            <View>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount.toFixed(2)}</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        backgroundColor: GlobalStyles.colors.primary500,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        marginBottom: 4,
        fontSize: 16,
        fontWeight: "bold"
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold"
    }
})