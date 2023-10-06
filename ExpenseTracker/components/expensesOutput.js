import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./expensesSummary";
import ExpensesList from "./expenseList";
import { GlobalStyles } from "../constants/style";

DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'book',
        amount: 30,
        date: new Date('2021-12-09')
    },
    {
        id: 'e2',
        description: 'shoe',
        amount: 4.11,
        date: new Date('2022-07-09')
    },
    {
        id: 'e3',
        description: 'milk',
        amount: 5.69,
        date: new Date('2023-08-31')
    },
    {
        id: 'e4',
        description: 'book',
        amount: 30,
        date: new Date('2021-12-09')
    },
    {
        id: 'e5',
        description: 'water',
        amount: 30.12,
        date: new Date('2023-06-09')
    },
]

function ExpensesOutput({expenses, expensesPeriod}) {

    return <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
})