import { Text } from "react-native"
import ExpensesOutput from "../components/expensesOutput"

function RecentExpenses() {

    return <ExpensesOutput expensesPeriod={'last 7 days'} />
}

export default RecentExpenses